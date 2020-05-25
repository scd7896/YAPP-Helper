const express = require("express");
const dotenv = require("dotenv");
const path = require('path');
dotenv.config();
const app = express();
const cors = require("cors");
const redis = require('redis')
const redisClient = redis.createClient()
const values = {
  data: 'hello',
  tet: 'www'
}
redisClient.set('test', JSON.stringify(values), redis.print)

redisClient.get('test', function(err, reply){
  console.log('tet',reply)
  console.log('err',err)
})

// const fileRouter = require("./controller/file");
const emailRouter = require("./controller/email");
const recruitRouter = require('./route/recruit')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: true,
  })
);

app.use('/dist',express.static("dist")); // react 쓰기위한 것
app.use(express.static('public'));
// app.use("/api/file", fileRouter);
app.use("/api/email", emailRouter);
// app.use("/api/login", loginRouter);
app.use("/api/recruit", recruitRouter);
app.set("view engine", "ejs"); // .env를 사용하기 위한 ejs
app.get("*", (req, res) => {
 
  return res.status(200).render('index')
});


const server = app.listen(9170, () => console.log("서버 진행중 9170"));
const io = require('socket.io')(server);
app.set('socketio', io);
