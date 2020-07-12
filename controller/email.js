const apiKey = process.env.MAILGUN_API_KEY; // mailgun apiKey
const domain = process.env.MAILGUL_DOMAIN; // mailgun domain
const mailgun = require("mailgun-js")({
  //mailgun 모듈
  apiKey: apiKey,
  domain: domain,
  host: "api.eu.mailgun.net",
});

const { MailForm } = require("../models");
const path = require("path");
const mailform = require("./mailform");

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
 *   "user": [
 *     { "name": "Alice", "email": "alice@nomail.com", ... },
 *     { "name": "Bob", "email": "bob@nomail.com", ... },
 *     ...
 *   ]
 * }
 */
const send = async (req, res) => {
  console.log("메일 전송 시작");
  const io = req.app.get("socketio");

  const sendUserResult = (user, isError) => {
    // 메일 보내는 것 성공여부에 관계없이 결과를 프론트에 던져준다.
    const toClient = {
      ...user,
      isError,
    };
    io.emit("list-add", toClient);
  };

  const mailforms = await MailForm.scope({ method: ["whereType", req.body.type] }, "passedFirst").findAll();
  const passMapImage = path.join(__dirname, "../public/", mailforms[0].map_image);
  req.body.user.map((user) => {
    console.log(user.pass);
    const contentsBase = user.isPass ? mailforms[0].contents : mailforms[1].contents;
    const headImage = user.isPass ? mailforms[0].header_image : mailforms[1].header_image;

    const data = {
      from: "YAPP <no-reply@yapp.co.kr>",
      to: user.email,
      subject: "테스트",
      html: `<html>
        <img src="cid:${headImage}" width="750px" height="150px">
        ${contentsBase.replace(/\[name\]/g, user.name).replace(/\[meetingTime\]/g, user.meetingTime)}
      </html>`,
      inline: path.join(__dirname, "../public/", headImage),
      attachment: user.isPass && passMapImage,
      // "recipient-variables": JSON.stringify(recipientInfo),
    };
    mailgun.messages().send(data, function (error, body) {
      console.log(error);
      console.log(body);
      // sendUserResult({}, error ? true : false);
    });
  });
  return res.status(200).send("메일전송요청완료");
  // mailgun의 batch sending 기능을 이용해 동시에 메일을 보낸다
};

// router.get('/test/socket', (req, res) => {
// const io = req.app.get('socketio')
// for (let i = 0 ; i < 10; i++) {
//   setTimeout(() => {
//     io.emit('list-add', { data: i })
//   }, i * 1000)
// }
// res.status(200).send('소켓시작!')
// })

/**
 * 
//  */
// router.delete("/connection", (req, res) => {
//   // const io = req.app.get('socketio')
// 	// io.close();
// 	res.status(200).end();
// });

module.exports = {
  // socket: testSocket,
  send: send,
};
