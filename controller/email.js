// const apiKey = process.env.API_KEY; // mailgun apiKey
// const domain = process.env.DOMAIN; // mailgun domain
// const mailgun = require("mailgun-js")({ apiKey: apiKey, domain: domain, host: "api.eu.mailgun.net" }); //mailgun 모듈
const express = require('express');
const router = express.Router();
// const sendUserResult = (user, isError) => {
//   // 메일 보내는 것 성공여부에 관계없이 결과를 프론트에 던져준다.
//   const toClient = {
//     ...user,
//     isError,
//   };
//   io.emit("list-add", toClient);
// };

const testSocket = (req, res) => {
  const io = req.app.get('socketio');
  for (let i = 0 ; i < 10 ; i++) {
    setTimeout(() => {
      const data = `김서버test${i}`
      io.emit("list-add", data);
    }, i*1000)
  }
  return res.status(200).send('소켓 시작!')
}
/**
 * 지원자들 리스트를 받아서 그냥 메일을 쭈욱 보낸다.
 * 보낸 결과를 io.emit으로 전송한다.
 */
// router.post("/sendmail", (req, res) => {
//   console.log("메일 전송 시작");
//   for (let i = 0; i < process.env.ALL_MEMBER_COUNT; i++) {
//     const data = createUserData(allUsers[i]);
//     const oneUser = allUsers[i];
//     setTimeout(() => {
//       mailgun.messages().send(data, function (error, body) {
//         if (error) {
//           sendUserResult(oneUser, true);
//           return;
//         } else {
//           sendUserResult(oneUser, false);
//           return;
//         }
//       });
//     }, i * 1000);
//   }
//   return res.status(200).send(process.env.ALL_MEMBER_COUNT);
// });
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
  socket: testSocket
};