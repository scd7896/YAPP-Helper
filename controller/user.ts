const redisClient = require("../config/redis");
const jwt = require("jsonwebtoken");
import { User } from "../models";

export const login = async (req, res) => {
  try {
    const user = await User.findUnique({
      where: {
        token: req.body.token,
      },
    });
    if (!user) {
      return res.status(403).send("로그인 정보가 맞지않습니다");
    }
    const accessToken = jwt.sign({ name: user.name, token: user.token }, process.env.JWT_SECRET);
    redisClient.set(accessToken, JSON.stringify(user));
    res.status(200).json({ token: accessToken });
  } catch (err) {
    console.log(err);
    res.status(500).send("데이터 베이스 조회 에러");
  }
};

export const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];
    redisClient.get(token, (err, reply) => {
      if (err) {
        return res.sendStatus(403);
      }

      req.user = JSON.parse(reply);
      next();
    });
  } else {
    res.sendStatus(401);
  }
};
