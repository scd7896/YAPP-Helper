import * as express from "express";
import * as dotenv from "dotenv";
import * as fs from "fs";
import * as fileController from "./controller/file";

const cors = require("cors");
class App {
  public application: express.Application;
  constructor() {
    this.application = express();
  }
}

dotenv.config();
const app = new App().application;

app.use(
  cors({
    origin: true,
  })
);

app.set("view engine", "ejs"); // .env를 사용하기 위한 ejs

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require("./routes"));
app.use((err, req, res, next) => {
  if (typeof req.files === "object") {
    Object.values(req.files)
      .flat()
      .forEach((file: any) => {
        fs.unlink(file.path, (err) => {
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

app.post("/test", fileController.upload.single("test"), (req, res) => {
  console.log(req);
  var username = req.body.username;
  res.send("<h1>Hello</h1> " + username);
});

const server = app.listen(9170, () => console.log("서버 진행중 9170"));

const io = require("socket.io")(server);
app.set("socketio", io);