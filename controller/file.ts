/* eslint-disable no-param-reassign */
/* eslint-disable operator-linebreak */
import * as multer from "multer";
import * as path from "path";
import * as crypto from "crypto";
import * as aws from "aws-sdk";
import * as multerS3 from "multer-s3";
import { DeleteObjectRequest } from "aws-sdk/clients/s3";

const config = {
  accessKeyId: process.env.STORAGE_ID,
  secretAccessKey: process.env.STORAGE_SECRETS,
  region: "ap-northeast-2",
};

const s3Client = new aws.S3(config);
const bucket = "static-yapp-helper";
const s3Storage = multerS3({
  s3: s3Client,
  bucket,
  acl: "public-read",
  key: (req, file, cb) => {
    crypto.randomBytes(16, (err, raw) => {
      cb(null, `public/${raw.toString("hex")}${path.extname(file.originalname)}`);
    });
  },
});

export const removeS3Item = (param, callback) => {
  const params: DeleteObjectRequest = {
    Key: param,
    Bucket: bucket,
  };
  s3Client.deleteObject(params, callback);
};
const targetStorage = s3Storage;

export const originPath = "https://static-yapp-helper.s3.ap-northeast-2.amazonaws.com/";

export const getFileName = (file) => (process.env.NODE_ENV === "production" ? file.key : file.filename);

export const upload = multer({ storage: targetStorage });
export const passUpload = multer();
export const saveUploadedFiles = (fields) => [
  upload.fields(fields.map((field) => ({ name: field }))),
  (req, res, next) => {
    req.files = JSON.parse(JSON.stringify(req.files));
    req.body = fields.reduce((body, field) => {
      if (req.files[field]) {
        const file = req.files[field][0];
        body[field] = getFileName(file);
      }
      return body;
    }, req.body);
    next();
  },
];

export const getFileData = async (name, callback) => {
  s3Client.getObject(
    {
      Bucket: bucket,
      Key: name,
    },
    callback
  );
};
