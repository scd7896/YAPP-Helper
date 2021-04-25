import { CertifiCate } from "@prisma/client";
import { Request, Response } from "express";
import { unlinkSync } from "fs";
import { createJsend } from "../lib";
import { CertificateModel } from "../models";

export const postCertificate = async (req, res) => {
  const { title, contents, subTitle } = req.body;
  try {
    const certifiCate = await CertificateModel.addCertificates({
      title,
      contents,
      subTitle,
      backgroundImage: req.file.filename,
    });
    res.status(200).json(createJsend("success", certifiCate));
  } catch (err) {
    console.log(err);
    res.status(500).json(createJsend("failure", err));
  }
};

export const getAllList = async (req, res) => {
  try {
    const certifiCate = await CertificateModel.getAllList();
    res.status(200).json(createJsend("success", certifiCate));
  } catch (err) {
    res.status(500).json(createJsend("failure", err));
  }
};

export const findByTitle = async (req, res) => {
  const { title } = req.query;
  try {
    const certifiCate = await CertificateModel.findByTitle({ title });
    res.status(200).json(createJsend("success", certifiCate));
  } catch (err) {
    res.status(500).json(createJsend("failure", err));
  }
};

export const findByUniqueById = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (isNaN(Number(id))) {
    return res.status(400).json(createJsend("failure", "id가 번호 타입이 아닙니다."));
  }

  try {
    const certifiCate = await CertificateModel.findCertificateById(Number(id));
    if (!certifiCate) throw "인증서 양식이 없습니다";
    return res.status(200).json(createJsend("success", certifiCate));
  } catch (err) {
    return res.status(500).json(createJsend("failure", err));
  }
};

export const putCertificate = async (req, res: Response) => {
  const { id } = req.params;
  const { body, file } = req;
  let targetCertificate: CertifiCate;
  const param = { ...body };

  try {
    targetCertificate = await CertificateModel.findCertificateById(Number(id));
    if (!targetCertificate) throw "타겟이 없습니다.";
  } catch (err) {
    return res.status(500).json(createJsend("failure", err));
  }

  if (file) {
    unlinkSync(`public/${targetCertificate.backgroundImage}`);
    param.backgroundImage = req.file.filename;
  } else {
    param.backgroundImage = targetCertificate.backgroundImage;
  }

  try {
    await CertificateModel.changeCertificate(parseInt(id, 10), param);
    return res.status(200).json(createJsend("success", "성공"));
  } catch (err) {
    console.log(err);
    return res.status(500).json(createJsend("failure", err));
  }
};
