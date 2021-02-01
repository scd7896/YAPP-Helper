import * as express from "express";
class App {
  public application: express.Application;
  constructor() {
    this.application = express();
  }
}
const dotenv = require("dotenv");
const path = require("path");
dotenv.config();
const app = new App().application;
const { unlink } = require("fs");
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: true,
  })
);
app.set("view engine", "ejs"); // .env를 사용하기 위한 ejs

app.use(require("./routes"));
app.use((err, req, res, next) => {
  if (typeof req.files === "object") {
    Object.values(req.files)
      .flat()
      .forEach((file: any) => {
        unlink(file.path, (err) => {
          if (err) {
            return next(err);
          }
        });
      });
  }
  next(err);
});
app.use((err, req, res, next) => {
  if (!res.headersSent) {
    res.sendStatus(500);
  }
});

const server = app.listen(9170, () => console.log("서버 진행중 9170"));
const io = require("socket.io")(server);
app.set("socketio", io);
