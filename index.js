const express = require("express");
const dotenv = require("dotenv");
const path = require('path');
dotenv.config();
const app = express();
const cors = require("cors");
const { ChunkExtractor } = require('@loadable/server')
const stats = path.resolve(__dirname, './dist/loadable-stats.json');
const extractor = new ChunkExtractor({ statsFile: stats });
// const fileRouter = require("./controller/file");
// const emailRouter = require("./controller/email");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: true,
  })
);

app.use(express.static("/dist")); // react 쓰기위한 것
// app.use("/api/file", fileRouter);
// app.use("/api/email", emailRouter);
// app.use("/api/login", loginRouter);
// app.use("/api/recruit", recruitRouter);
app.set("view engine", "ejs"); // .env를 사용하기 위한 ejs

app.get("/", (req, res) => {
  /**
   * 메인 페이지로 구글 로그인 화면을 띄운다 싱글페이지로 만들 것으로 합쳐버리자
   */
  // console.log(__dirname)
  
  // console.log(stats)
  console.log(extractor.stats.assets)
  console.log(req.url)
  // console.log(extractor.getScriptTags())
  return res.status(200).send('hello world')
});

app.get("/select", (req, res) => {
  console.log(extractor.stats.assets)
  console.log(req.url)
  return res.status(200).send('hello select')
})
app.listen(9170, () => console.log("서버 진행중 9170"));
