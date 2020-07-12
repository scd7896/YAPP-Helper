const { MailForm } = require("../models");

const index = (req, res) => {
  MailForm.scope("orderByType", "passedFirst")
    .findAll()
    .then((mailforms) => {
      res.json(mailforms);
    });
};

const searchByType = (req, res) => {
  MailForm.scope({ method: ["whereType", req.params.type] }, "passedFirst")
    .findAll()
    .then((mailforms) => {
      res.json(
        mailforms.map((mailform) => ({
          ...mailform,
          head_image: `/${mailform.head_image}`,
          map_image: `/${mailform.map_image}`,
        }))
      );
    });
};

const show = (req, res) => {
  res.json(req.mailform);
};

const store = (req, res) => {
  MailForm.create(req.body)
    .then((mailform) => {
      res.status(201).json(mailform);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

const update = (req, res) => {
  let mailform = req.mailform;
  for (let [key, value] of Object.entries(req.body)) {
    mailform[key] = value;
  }

  for (let [key, value] of Object.entries(req.files)) {
    const prevImage = mailform[key];
    mailform[key] = value[0].filename;
  }

  mailform
    .save()
    .then((updated) => {
      if (updated) {
        res.status(204).end();
      } else {
        throw new Error();
      }
    })
    .catch((err) => {
      res.status(500).end();
    });
};

const destroy = (req, res) => {
  req.mailform
    .destroy()
    .then((deleted) => {
      if (deleted) {
        res.status(204).end();
      } else {
        throw new Error();
      }
    })
    .catch((err) => {
      res.status(500).end();
    });
};

module.exports = {
  index: index,
  searchByType: searchByType,
  show: show,
  store: store,
  update: update,
  destroy: destroy,
};
