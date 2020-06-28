const express = require('express');
const router = express.Router();
const multer  = require('multer');
const path = require('path');
const crypto = require('crypto');

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

router.route('/')
	.get(controller.index)
	.post([
		upload.fields([{ name: 'header_image' }, { name: 'map_image' }]),
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
	const mailform_id = parseInt(id);
	if (isNaN(mailform_id)){
		res.sendStatus(400);
	}
	else {
		MailForm.findByPk(mailform_id)
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
