import * as express from "express";
import * as dotenv from "dotenv";
import * as fs from "fs";
import * as path from "path";
import * as cons from "consolidate";
import * as cookieParser from "cookie-parser";

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
app.use(cookieParser());

// view engine setup
app.engine("html", cons.swig);
app.set("views", path.join(__dirname, "public"));
app.set("view engine", "html");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require("./routes"));

app.use((err, req, res, next) => {
  if (typeof req.files === "object") {
    Object.values(req.files)
      .flat()
      .forEach((file: any) => {
        fs.unlink(file.path, (fileError) => {
          if (fileError) {
            return next(fileError);
          }
          return null;
        });
      });
  }
  next(err);
});
app.use((req, res) => {
  if (!res.headersSent) {
    res.sendStatus(500);
  }
});

app.post("/test", fileController.upload.single("test"), (req, res) => {
  console.log(req);
  const { username } = req.body;
  res.send(`<h1>Hello</h1> ${username}`);
});

const server = app.listen(9170, () => console.log("서버 진행중 9170"));

const io = require("socket.io")(server);

app.set("socketio", io);
