import { createJsend } from "../lib";
import { MailFormModel } from "../models";
const { unlink } = require("fs");

export const findUnique = async (req, res, next) => {
  try {
    const target = await MailFormModel.findMailFormById(parseInt(req.params.mailform_id, 10));
    if (!target) {
      res.status(404).json(createJsend("failure", "타겟이 없습니다"));
      throw new Error("Not Found");
    }
    req.mailform = target;
    next();
  } catch (err) {
    console.log(err);
    res.status(500).json(createJsend("failure", "dbConnectError"));
  }
};

export const index = async (req, res, next) => {
  try {
    const mailforms = await MailFormModel.findMailFormOrderById();
    res.json(mailforms);
  } catch (err) {
    console.log(err);
    res.status(500).send("에러");
  }
};

export const show = (req, res) => {
  res.json(req.mailform);
};

export const update = async (req, res, next) => {
  const previous = {
    header_image: req.mailform.header_image,
    map_image: req.mailform.map_image,
  };
  try {
    ["header_image", "map_image"].forEach((key) => {
      if (req.body[key] !== undefined) {
        try {
          unlink("public/" + previous[key], () => console.log("successfully deleted " + previous[key]));
        } catch (err) {}
      }
    });

    const afterUpdate = await MailFormModel.updateMailForm(parseInt(req.mailform.id, 10), req.body);

    res.status(204).json(createJsend("success", afterUpdate));
  } catch (err) {
    res.status(500).json(createJsend("failure", "dbError"));
  }
};

export const destroy = (req, res, next) => {
  req.mailform
    .destroy()
    .then((mailform) => {
      res.sendStatus(204);
      ["header_image", "map_image"].forEach((key) => {
        unlink(mailform[key], () => console.log("successfully deleted " + mailform[key]));
      });
    })
    .catch((err) => {
      next(err);
    });
};
