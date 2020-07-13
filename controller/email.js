const mailgun = require('mailgun-js')({ //mailgun 모듈
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_DOMAIN,
  host: process.env.MAILGUN_HOST
});
const { MailForm } = require('../models');
const { basename } = require('path');

// const sendUserResult = (user, isError) => {
//   // 메일 보내는 것 성공여부에 관계없이 결과를 프론트에 던져준다.
//   const toClient = {
//     ...user,
//     isError,
//   };
//   io.emit("list-add", toClient);
// };

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
const send = async (req, res) => {
  const mailforms = await MailForm
    .scope({ method: ['whereType', req.body.type] }, 'passedFirst')
    .findAll();

  if (mailforms.length !== 2
    || mailforms[0].pass !== true
    || mailforms[1].pass !== false
  ) {
    res.sendStatus(500);
    return;
  }

  res.sendStatus(200);
  console.log('메일 전송 시작');

  req.body.users
    .reduce((recipient, user) => {
      if (user.isPass) {
        recipient[0][user.email] = user;
      }
      else {
        recipient[1][user.email] = user;
      }
      return recipient;
    }, [{}, {}])
    .map((recipientInfo, index) => {
      if (Object.keys(recipientInfo).length === 0) {
        return;
      }
      const mailform = mailforms[index];
      return {
        from: 'YAPP <no-reply@yapp.co.kr>',
        to: Object.values(recipientInfo).map(recipient => `${recipient.name} <${recipient.email}>`).join(', '),
        subject: mailform.title,
        // text: '안녕하세요 %recipient.name%\n' + `이 메일은 ${(new Date()).toLocaleString('ko-KR')}에 작성되었습니다`,
        html: `<html><table>
          <tr><td><img src="cid:${basename(mailform.header_image)}"></td></tr>
          <tr><td>${mailform.contents}</td></tr>
          <tr><td><img src="cid:${basename(mailform.map_image)}"></td></tr>
          </table></html>`,
        inline: [mailform.header_image, mailform.map_image],
        'recipient-variables': JSON.stringify(recipientInfo)
      };
    })
    .filter(Boolean)
    .forEach(data => {
      mailgun.messages().send(data, (error, body) => {
        console.log(error);
        console.log(body);
      });
    });
};

// router.get('/test/socket', (req, res) => {
//   const io = req.app.get('socketio')
//   for (let i = 0 ; i < 10; i++) {
//     setTimeout(() => {
//       io.emit('list-add', { data: i })
//     }, i * 1000)
//   }
//   res.status(200).send('소켓시작!')
// });

// router.delete('/connection', (req, res) => {
//   const io = req.app.get('socketio')
//   io.close();
//   res.status(200).end();
// });

module.exports = {
  // socket: testSocket,
  send: send
};