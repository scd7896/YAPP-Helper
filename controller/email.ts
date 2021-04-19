import * as crypto from "crypto";
import { createJsend } from "../lib";
import { MailForm } from "../models";
import * as jwt from "jsonwebtoken";
import * as fs from "fs";

const mailgun = require("mailgun-js")({
  //mailgun 모듈
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_DOMAIN,
  host: process.env.MAILGUN_HOST,
});
const redisClient = require("../config/redis");

const path = require("path");

const sendUserResult = (io, user, error) => {
  // 메일 보내는 것 성공여부에 관계없이 결과를 프론트에 던져준다.
  const toClient = {
    user,
    isError: error,
  };
  io.emit("list-add", toClient);
};

export const reSend = async (req, res) => {
  const { key } = req.body;
  const io = req.app.get("socketio");
  redisClient.get(key, (error, data) => {
    if (error || data === null) {
      return res.status(500).json(createJsend("failure", "데이터가 없음"));
    }
    res.sendStatus(200);
    const mailgunPromises = JSON.parse(data).map((data) => {
      return mailgun
        .messages()
        .send(data)
        .then(() => sendUserResult(io, data.to, false))
        .catch(() => {
          sendUserResult(io, data.to, true);
          return data;
        });
    });

    Promise.all(mailgunPromises).then((failList) => {
      redisClient.set(key, JSON.stringify(failList.filter(Boolean)));
    });
  });
};

/**
 * 지원자들 리스트를 받아서 그냥 메일을 쭈욱 보낸다.
 * TODO: 보낸 결과를 io.emit으로 전송한다.
 *
 * POST /api/email/send
 * body:
 * {
 *   "type": "meeting",
 *   "users": [
 *     { "name": "Alice", "email": "alice@nomail.com", "isPass": true, ... },
 *     { "name": "Bob", "email": "bob@nomail.com", "isPass": false, ... },
 *     ...
 *   ]
 * }
 */
export const send = async (req, res) => {
  const mailforms = await MailForm.findMany({ where: { type: "meeting" } });
  const io = req.app.get("socketio");
  if (mailforms.length !== 2 || mailforms[0].pass !== true || mailforms[1].pass !== false) {
    res.sendStatus(422);
    return;
  }

  const mailgunPromises = req.body.users
    .map((user) => {
      const mailform = user.pass ? mailforms[0] : mailforms[1];
      return {
        from: "YAPP <support@yapp.co.kr>",
        to: user.email,
        subject: mailform.title,
        html: `<html>
          <img src="cid:${mailform.header_image}" width="750px" height="150px">
          <p>${mailform.contents.replace(/\[name\]/g, user.name).replace(/\[meetingTime\]/g, user.meetingTime)}</p>
          </html>`,
        inline: path.join(__dirname, "../public/", mailform.header_image),
        attachment: user.pass && path.join(__dirname, "../public/", mailform.map_image),
      };
    })
    .map((data) => {
      console.log(data);
      return mailgun
        .messages()
        .send(data)
        .then(() => sendUserResult(io, data.to, false))
        .catch(() => {
          sendUserResult(io, data.to, true);
          return data;
        });
    });

  Promise.all(mailgunPromises).then((failList) => {
    const key = crypto.randomBytes(16).toString("hex");
    redisClient.set(key, JSON.stringify(failList.filter(Boolean)));
    io.emit("send-key", key);
  });
  res.sendStatus(200);
};

export const certificateMailSend = async (req, res) => {
  const { mail, title, contents } = req.body;

  mailgun
    .messages()
    .send({
      from: "YAPP <support@yapp.co.kr>",
      to: mail,
      subject: title,
      html: contents,
      attachment: path.join(__dirname, "../public/", req.file.filename),
    })
    .then(() => {
      res.status(200).json(createJsend("success", "전송성공"));
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(createJsend("success", "전송실패"));
    });
  fs.unlink(req.file.path, (err) => {
    if (err) {
      console.log(err);
    }
  });
};

export const sendInvitationMail = async (req, res) => {
  const mail = req.body.mail;
  if (!mail) res.status(400).json(createJsend("failure", "메일 주소는 필수 입니다."));
  const accessToken = jwt.sign({ mail }, process.env.JWT_SECRET, { expiresIn: "10m" });
  const mailForm = {
    from: "YAPP <support@yapp.co.kr>",
    to: mail,
    subject: "초대 메일입니다",
    html: `<html>
      <p>안녕하세요 YAPP 입니다.</p>
      <p>업무에 필요 한 부분이 있어 어드민 페이지의 권한을 드리려고 합니다.</p>
      <p>이 링크를 클릭해주세요</p>
      <p>link: http://helper.yapp.co.kr/invitation?token=${accessToken}</p>
      </html>`,
  };
  mailgun
    .messages()
    .send(mailForm)
    .then(() => {
      res.status(200).json(createJsend("success", "메일 전송 성공"));
    })
    .catch((err) => {
      res.status(500).json(createJsend("success", { data: err }));
    });
};
