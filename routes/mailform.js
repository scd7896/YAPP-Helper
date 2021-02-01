const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const crypto = require("crypto");
const { body, param, matchedData, validationResult } = require("express-validator");
const controller = require("../controller/mailform");
const { MailForm } = require("../models");
const authMiddleWare = require("../middleware/auth");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public");
  },
  filename: function (req, file, cb) {
    crypto.randomBytes(16, function (err, raw) {
      cb(err, err ? undefined : raw.toString("hex") + path.extname(file.originalname));
    });
  },
});
const upload = multer({ storage: storage });
const saveUploadedFiles = (fields) => {
  return [
    upload.fields(
      fields.map((field) => {
        return { name: field };
      })
    ),
    (req, res, next) => {
      req.body = fields.reduce((body, field) => {
        body[field] = ((req.files[field] || [])[0] || {}).filename;
        return body;
      }, req.body);
      next();
    },
  ];
};

const validate = (validations) => {
  return async (req, res, next) => {
    await Promise.all(validations.map((validation) => validation.run(req)));

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    res.sendStatus(400);
    next(errors.array());
  };
};

router.route("*").all([authMiddleWare]);
router
  .route("/")
  .get(controller.index)
  .post([
    saveUploadedFiles(["header_image", "map_image"]),
    validate([
      body("title").exists().notEmpty().trim(),
      body("type").exists().notEmpty().trim(),
      body("pass").exists().isBoolean().toBoolean(),
      body("contents").exists().notEmpty().trim(),
      body("header_image").exists().notEmpty(),
      body("map_image").exists().notEmpty(),
    ]),
    (req, res, next) => {
      req.body = matchedData(req);
      next();
    },
    controller.store,
  ]);

router
  .route("/:mailform_id")
  .all([
    validate([param("mailform_id").isInt().toInt()]),
    (req, res, next) => {
      MailForm.findByPk(req.params.mailform_id)
        .then((mailform) => {
          if (mailform === null) {
            res.sendStatus(404);
            throw new Error("Not Found");
          }
          req.mailform = mailform;
          next();
        })
        .catch((err) => {
          next(err);
        });
    },
  ])
  .get(controller.show)
  .put([
    saveUploadedFiles(["header_image", "map_image"]),
    validate([
      body("title").optional().notEmpty().trim(),
      body("pass").optional().isBoolean().toBoolean(),
      body("contents").optional().notEmpty().trim(),
      body("header_image").optional().notEmpty(),
      body("map_image").optional().notEmpty(),
    ]),
    (req, res, next) => {
      req.body = matchedData(req);
      next();
    },
    controller.update,
  ])
  .delete(controller.destroy);

module.exports = router;
