const { MailForm } = require('../models');

let index = (req, res) => {
	MailForm
		.scope('orderByType', 'passedFirst')
		.findAll()
		.then(mailforms => {
			res.json(mailforms);
		});
}

let show = (req, res) => {
	res.json(req.mailform);
}

let store = (req, res) => {
	MailForm.create(req.body)
		.then(mailform => {
			res.status(201).json(mailform);
		})
		.catch(err => {
			res.status(500).json(err);
		});
}

let update = (req, res) => {
	let mailform = req.mailform;
	for (let [key, value] of Object.entries(req.body)) {
		mailform[key] = value;
	}
	mailform.save()
		.then(updated => {
			if (updated) {
				res.status(204).end();
			}
			else {
				throw new Error();
			}
		})
		.catch(err => {
			res.status(500).end();
		});
}

let destroy = (req, res) => {
	req.mailform.destroy()
		.then(deleted => {
			if (deleted) {
				res.status(204).end();
			}
			else {
				throw new Error();
			}
		})
		.catch(err => {
			res.status(500).end();
		});
}

module.exports = {
	index: index,
	show: show,
	store: store,
	update: update,
	destroy: destroy
};
