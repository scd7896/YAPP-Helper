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

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: true,
  })
);
app.set("view engine", "ejs"); // .env를 사용하기 위한 ejs

app.use(require('./routes'));

const server = app.listen(9170, () => console.log("서버 진행중 9170"));
const io = require('socket.io')(server);
app.set('socketio', io);
