import * as multer from "multer";
import * as path from "path";
import * as crypto from "crypto";
import * as aws from "aws-sdk";
import * as multerS3 from "multer-s3";

const config = {
  accessKeyId: process.env.STORAGE_ID,
  secretAccessKey: process.env.STORAGE_SECRETS,
  region: "ap-northeast-2",
};
console.log(config, process.env.MAILGUN_HOST);
const s3Client = new aws.S3(config);

const s3Storage = multerS3({
  s3: s3Client,
  bucket: "static-yapp-helper",
  acl: "public-read",
  key: (req, file, cb) => {
    console.log(file, config);
    crypto.randomBytes(16, (err, raw) => {
      cb(null, raw.toString("hex") + path.extname(file.originalname));
    });
  },
});

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "public");
  },
  filename(req, file, cb) {
    crypto.randomBytes(16, (err, raw) => {
      cb(err, err ? undefined : raw.toString("hex") + path.extname(file.originalname));
    });
  },
});

export const upload = multer({ storage: s3Storage });
export const passUpload = multer();
export const saveUploadedFiles = (fields) => [
  upload.fields(fields.map((field) => ({ name: field }))),
  (req, res, next) => {
    req.body = fields.reduce((body, field) => {
      body[field] = ((req.files[field] || [])[0] || {}).filename;
      return body;
    }, req.body);
    next();
  },
];
