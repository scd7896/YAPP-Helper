import * as multer from "multer";
import * as path from "path";
import * as crypto from "crypto";

export const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public");
  },
  filename: function (req, file, cb) {
    crypto.randomBytes(16, function (err, raw) {
      cb(err, err ? undefined : raw.toString("hex") + path.extname(file.originalname));
    });
  },
});
export const upload = multer({ storage });
export const saveUploadedFiles = (fields) => {
  try {
  } catch (err) {
    console.log(err);
  } finally {
    return [
      upload.fields(
        fields.map((field) => {
          return { name: field };
        })
      ),
      (req, res, next) => {
        req.body = fields.reduce((body, field) => {
          body[field] = ((req.files[field] || [])[0] || {}).filename;
          return body;
        }, req.body);
        next();
      },
    ];
  }
};
