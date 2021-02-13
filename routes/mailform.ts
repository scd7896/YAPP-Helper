import * as express from "express";
import * as controller from "../controller/mailform";
import * as fileController from "../controller/file";

const router = express.Router();

const { body, matchedData, validationResult } = require("express-validator");

import { authenticateJWT } from "../controller/user";

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

router.route("*").all([authenticateJWT]);
router.route("/").get(controller.index);

router
  .route("/:mailform_id")
  .all([controller.findUnique])
  .get(controller.show)
  .put([
    ...fileController.saveUploadedFiles(["header_image", "map_image"]),
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
