const { MailForm } = require("../models");
const { unlink } = require("fs");

const index = (req, res, next) => {
  MailForm.scope("orderByType", "passedFirst")
    .findAll()
    .then((mailforms) => {
      res.json(mailforms);
    })
    .catch((err) => {
      next(err);
    });
};

const searchByType = (req, res) => {
  MailForm.scope({ method: ["whereType", req.params.type] }, "passedFirst")
    .findAll()
    .then((mailforms) => {
      res.json(
        mailforms.map((mailform) => ({
          title: mailform.title,
          type: mailform.type,
          pass: mailform.pass,
          contents: mailform.contents,
          header_image: `/${mailform.header_image}`,
          map_image: `/${mailform.map_image}`,
        }))
      );
    })
    .catch((err) => {
      next(err);
    });
};

const show = (req, res) => {
  res.json(req.mailform);
};

const store = (req, res, next) => {
  MailForm.create(req.body)
    .then((mailform) => {
      res.status(201).json(mailform);
    })
    .catch((err) => {
      next(err);
    });
};

const update = (req, res, next) => {
  const previous = {
    header_image: req.mailform.header_image,
    map_image: req.mailform.map_image,
  };
  req.mailform
    .update(req.body)
    .then((mailform) => {
      res.json(mailform);
      ["header_image", "map_image"].forEach((key) => {
        if (req.body[key] !== undefined) {
          unlink(previous[key], () => console.log("successfully deleted " + previous[key]));
        }
      });
    })
    .catch((err) => {
      next(err);
    });
};

const destroy = (req, res, next) => {
  req.mailform
    .destroy()
    .then((mailform) => {
      res.sendStatus(204);
      ["header_image", "map_image"].forEach((key) => {
        unlink(mailform[key], () => console.log("successfully deleted " + mailform[key]));
      });
    })
    .catch((err) => {
      next(err);
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
