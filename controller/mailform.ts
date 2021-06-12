import { createJsend } from "../lib";
import { MailFormModel } from "../models";
import * as FileController from "./file";

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
    const mailforms = await MailFormModel.findMailFormOrderById({ type: req.query.type });
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
          FileController.removeS3Item(previous[key], (err, data) => {
            console.log(err);
          });
        } catch (err) {
          console.log(err);
        }
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
        FileController.removeS3Item(mailform[key], (a, b) => {
          console.log(a, b);
        });
      });
    })
    .catch((err) => {
      next(err);
    });
};
