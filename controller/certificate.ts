import { Request, Response } from "express";
import { createJsend } from "../lib";
import { CertificateModel } from "../models";

export const postCertificate = async (req, res) => {
  const { title, contents, subTitle, backgroundImage } = req.body;
  try {
    const certifiCate = await CertificateModel.addCertificates({ title, contents, subTitle, backgroundImage });
    res.status(200).json(createJsend("success", certifiCate));
  } catch (err) {
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
    res.status(200).json(createJsend("success", certifiCate));
  } catch (err) {
    res.status(500).json(createJsend("failure", err));
  }
};
