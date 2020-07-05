const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const crypto = require('crypto');
const { checkSchema, body, matchedData, validationResult } = require('express-validator');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public');
  },
  filename: function (req, file, cb) {
    crypto.randomBytes(16, function (err, raw) {
      cb(err, err ? undefined : raw.toString('hex') + path.extname(file.originalname));
    });
  }
});
const upload = multer({ storage: storage });

const controller = require('../controller/mailform');
const { MailForm } = require('../models');

const uploadAndGetPath = [
  upload.fields([{ name: 'header_image' }, { name: 'map_image' }]),
  (req, res, next) => {
    req.body = {
      ...req.body,
      header_image: ((req.files.header_image || [])[0] || {}).path,
      map_image: ((req.files.map_image || [])[0] || {}).path
    };
    console.log(req.body);
    next();
  }
];

router.route('/')
  .get(controller.index)
  .post([
    uploadAndGetPath,
    // checkSchema({
    //   title: {
    //     in: ['body'],
    //     exists: true,
    //     isEmpty: false
    //   },
    //   type: {
    //     in: ['body'],
    //     exists: true,
    //     isEmpty: false
    //   },
    //   contents: {
    //     in: ['body'],
    //     exists: true,
    //     isEmpty: false
    //   }
    // }),
    body('title').exists().notEmpty(),
    body('type').exists().notEmpty(),
    body('contents').exists().notEmpty(),
    body('header_image').exists().notEmpty(),
    body('map_image').exists().notEmpty(),
    (req, res, next) => {
      if (validationResult(req).isEmpty()) {
        req.body = matchedData(req);
        next();
      }
      else {
        console.log('validation error');
        res.sendStatus(400);
      }
    },
    controller.store
  ]);

router.route('/type/:type')
  .get(controller.searchByType);

router.route('/:mailform_id')
  .get(controller.show)
  .put([
    upload.fields([{ name: 'header_image' }, { name: 'map_image' }]),
    controller.update
  ])
  .delete(controller.destroy);

router.param('mailform_id', function (req, res, next, id) {
  const mailformId = parseInt(id);
  if (isNaN(mailformId)) {
    res.sendStatus(400);
  }
  else {
    MailForm.findByPk(mailformId)
      .then(mailform => {
        if (mailform === null) {
          res.sendStatus(404);
        }
        else {
          req.mailform = mailform;
          next();
        }
      });
  }
});

module.exports = router;
