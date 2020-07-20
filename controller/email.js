const mailgun = require("mailgun-js")({
  //mailgun 모듈
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_DOMAIN,
  host: process.env.MAILGUN_HOST,
});
const redis = require("redis");
const redisClient = redis.createClient();
const { basename } = require("path");

const { MailForm } = require("../models");
const path = require("path");
const mailform = require("./mailform");
const { isError } = require("util");
const crypto = require("crypto");

// const testSocket = (req, res) => {
//   const io = req.app.get('socketio');
//   for (let i = 0 ; i < 10 ; i++) {
//     setTimeout(() => {
//       const data = `김서버test${i}`
//       io.emit("list-add", data);
//     }, i*1000)
//   }
//   return res.status(200).send('소켓 시작!')
// }

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
const reSend = async (req, res) => {
  const { key } = req.body;
  redisClient.get(key, (data, error) => {
    if (error) {
      return res.status(400).send("레디스 데이터 가져오지 못함");
    }
    const datas = JSON.parse(data);
    const failList = datas.filter((data) => {
      mailgun.messages().send(data, function (error, body) {
        return sendUserResult(data.to, error);
      });
    });
    redisClient.set(key, JSON.stringify(failList), redis.print);
  });
};

const send = async (req, res) => {
  const mailforms = await MailForm.scope({ method: ["whereType", req.body.type] }, "passedFirst").findAll();
  const io = req.app.get("socketio");
  if (mailforms.length !== 2 || mailforms[0].pass !== true || mailforms[1].pass !== false) {
    res.sendStatus(422);
    return;
  }

  const sendUserResult = (user, isError) => {
    // 메일 보내는 것 성공여부에 관계없이 결과를 프론트에 던져준다.
    const error = isError ? true : false;
    const toClient = {
      user,
      isError: error,
    };
    io.emit("list-add", toClient);
    return error;
  };

  res.sendStatus(200);
  console.log("메일 전송 시작");
  const failList = req.body.users
    .map((user) => {
      const mailform = user.pass ? mailforms[0] : mailforms[1];
      console.log(mailform.title);
      return {
        from: "YAPP <no-reply@yapp.co.kr>",
        to: user.email,
        subject: mailform.title,
        // text: '안녕하세요 %recipient.name%\n' + `이 메일은 ${(new Date()).toLocaleString('ko-KR')}에 작성되었습니다`,
        html: `<html>
          <img src="cid:${mailform.header_image}" width="750px" height="150px">
          <p>${mailform.contents.replace(/\[name\]/g, user.name).replace(/\[meetingTime\]/g, user.meetingTime)}</p>
          </html>`,
        inline: path.join(__dirname, "../public/", mailform.header_image),
        attachment: user.pass && path.join(__dirname, "../public/", mailform.map_image),
      };
    })
    .filter((data) => {
      mailgun.messages().send(data, function (error, body) {
        return sendUserResult(data.to, error);
      });
    });
  const key = crypto.randomBytes(16).toString("hex");
  redisClient.set(key, JSON.stringify(failList), redis.print);
  io.emit("send-key", key);
};

module.exports = {
  // socket: testSocket,
  send: send,
  reSend: reSend,
};
