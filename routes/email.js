const express = require("express");
const router = express.Router();
const controller = require("../controller/email");
const { body, matchedData, validationResult } = require("express-validator");

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

router.post("/send", [
  validate([body("type").exists().notEmpty().trim(), body("users").exists().isArray()]),
  (req, res, next) => {
    req.body = matchedData(req);
    next();
  },
  controller.send,
]);

router.post("/resend", controller.reSend);
module.exports = router;
