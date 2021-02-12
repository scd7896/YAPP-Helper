import { MailForm } from "../models";
const { unlink } = require("fs");

export const findUnique = async (req, res, next) => {
  try {
    const target = await MailForm.findUnique({
      select: {
        id: true,
        title: true,
        contents: true,
        header_image: true,
        map_image: true,
        updatedAt: true,
        createdAt: true,
      },
      where: { id: parseInt(req.params.mailform_id, 10) },
    });
    if (!target) {
      res.status(404).send("없습니다.");
      throw new Error("Not Found");
    }
    req.mailform = target;
    next();
  } catch (err) {
    console.log(err);
    res.status(500).send("dberror");
  }
};

export const index = async (req, res, next) => {
  try {
    const mailforms = await MailForm.findMany({
      orderBy: {
        id: "asc",
      },
    });
    res.json(
      mailforms.map((mailform) => ({
        id: mailform.id,
        title: mailform.title,
        type: mailform.type,
        pass: mailform.pass,
        contents: mailform.contents,
        header_image: `/${mailform.header_image}`,
        map_image: `/${mailform.map_image}`,
      }))
    );
  } catch (err) {
    console.log(err);
    res.status(500).send("에러");
  }
};

export const show = (req, res) => {
  res.json(req.mailform);
};

export const store = (req, res, next) => {
  MailForm.create(req.body)
    .then((mailform) => {
      res.status(201).json(mailform);
    })
    .catch((err) => {
      next(err);
    });
};

export const update = async (req, res, next) => {
  const previous = {
    header_image: req.mailform.header_image,
    map_image: req.mailform.map_image,
  };
  try {
    ["header_image", "map_image"].forEach((key) => {
      if (req.body[key] !== undefined) {
        try {
          unlink("public/" + previous[key], () => console.log("successfully deleted " + previous[key]));
        } catch (err) {}
      }
    });

    const afterUpdate = await MailForm.update({
      where: {
        id: req.mailform.id,
      },
      data: {
        ...req.body,
        updatedAt: new Date(),
      },
    });

    res.status(204).json({ status: "sucess", data: afterUpdate });
  } catch (err) {
    console.log(err);
    res.status(500).send("rere");
  }
};

export const destroy = (req, res, next) => {
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
