const express = require("express");
const server = express.Router();
const db = require("../model/firebase");
const authMiddleWare = require("../middleware/auth");

server.route("*").all([authMiddleWare]);

server.get("/", async (req, res) => {
  try {
    const recruitData = await db.ref("/recruit").once("value");
    res.status(200).json(recruitData);
  } catch (err) {
    res.status(500).send("파이어베이스 에러가 발생했습니다");
  }
});

server.put("/", async (req, res) => {
  try {
    await db.ref("/recruit/recruit-data").update({
      generation: req.body.generation,
      isRecruit: req.body.isRecruit,
      lastDay: req.body.lastDay,
      startDay: req.body.startDay,
      url: req.body.url,
    });
    return res.status(204).send("업데이트완료");
  } catch (err) {
    console.log(err);
    res.status(500).send("파이어베이스 에러가 발생했습니다");
  }
});
module.exports = server;
