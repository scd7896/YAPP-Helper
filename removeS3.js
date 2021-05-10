/* eslint-disable no-shadow */
/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-var-requires */

const aws = require("aws-sdk");
const dotenv = require("dotenv");

dotenv.config();
const { prevVersion } = require("./package.json");

const config = {
  accessKeyId: process.env.STORAGE_ID,
  secretAccessKey: process.env.STORAGE_SECRETS,
  region: "ap-northeast-2",
};

const s3Client = new aws.S3(config);

const params = {
  Bucket: "static-yapp-helper",
  Prefix: `dist/${prevVersion}/`,
};

function emptyBucket(bucketName, callback) {
  let listParams = {
    Bucket: bucketName,
    Prefix: params.Prefix,
  };

  s3Client.listObjects(listParams, (err, data) => {
    if (err) return callback(err);

    if (data.Contents.length === 0) callback();

    listParams = { Bucket: bucketName };
    listParams.Delete = { Objects: [] };

    data.Contents.forEach((content) => {
      listParams.Delete.Objects.push({ Key: content.Key });
    });

    s3Client.deleteObjects(listParams, (err, data) => {
      if (err) return callback(err);
      if (data.Contents && data.Contents.length === 1000) emptyBucket(bucketName, callback);
      else callback();
    });
  });
}

emptyBucket(params.Bucket, (err) => {
  console.log("err", err);
});
