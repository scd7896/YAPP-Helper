const React = require('react') 
const { renderToString } = require('react-dom/server')
const express = require("express");
const dotenv = require("dotenv");
const path = require('path');
dotenv.config();
const app = express();
const cors = require("cors");
const ReactApp = require('./src/index.tsx')
const { ChunkExtractor, ChunkExtractorManager } = require('@loadable/server')
const statsFile = path.resolve('./dist/loadable-stats.json');

// const fileRouter = require("./controller/file");
// const emailRouter = require("./controller/email");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: true,
  })
);

app.use("/static", express.static(__dirname + "/dist")); // react 쓰기위한 것
// app.use("/api/file", fileRouter);
// app.use("/api/email", emailRouter);
// app.use("/api/login", loginRouter);
// app.use("/api/recruit", recruitRouter);
app.set("view engine", "ejs"); // .env를 사용하기 위한 ejs

app.get("*", (req, res) => {
  /**
   * 메인 페이지로 구글 로그인 화면을 띄운다 싱글페이지로 만들 것으로 합쳐버리자
   */
  res.type('html');
  const extractor = new ChunkExtractor({ 
    statsFile,
    publicPath: 'http://helpler.yapp.co.kr:9170/static/',
    entrypoints: ['client']
   });
  
  const html = renderToString(
    <ChunkExtractorManager extractor={extractor}>
      <ReactApp />
    </ChunkExtractorManager>
  );
  const scriptTags = extractor.getScriptTags();
  const linkTags = extractor.getLinkTags();
  const styleTag = extractor.getStyleTags();
  const sendHtml = `
    <html>
      <head>
        ${linkTags}
        ${styleTag}
      </head>
      <body>
        <div id="root">${html}</div>
        ${scriptTags}
      </body>
    </html>
  `
  res.status(200).send(sendHtml);
});


app.listen(9170, () => console.log("서버 진행중 9170"));
