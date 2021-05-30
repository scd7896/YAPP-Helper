import * as express from "express";
import * as controller from "../controller/email";
import { authenticateJWT, authenticateAdmin } from "../controller/user";

const router = express.Router();

const { body, matchedData, validationResult } = require("express-validator");

const validate = (validations) => async (req, res, next) => {
  await Promise.all(validations.map((validation) => validation.run(req)));

  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }

  res.sendStatus(400);
  next(errors.array());
};

router.post("/send", [
  authenticateJWT,
  authenticateAdmin,
  validate([body("users").exists().isArray()]),
  (req, res, next) => {
    req.body = matchedData(req);
    next();
  },
  controller.send,
]);

router.post("/resend", [
  authenticateJWT,
  authenticateAdmin,
  validate([body("key").exists().notEmpty().trim()]),
  (req, res, next) => {
    req.body = matchedData(req);
    next();
  },
  controller.reSend,
]);

export default router;
