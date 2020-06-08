const express = require('express');
const router = express.Router();

const controller = require('../controller/mailform');
const { MailForm } = require('../models');

router.route('/')
	.get(controller.index)
	.post(controller.store);

router.route('/:mailform_id')
	.get(controller.show)
	.put(controller.update)
	.delete(controller.destroy);

router.param('mailform_id', function (req, res, next, id) {
	const mailform_id = parseInt(req.params.mailform_id);
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
