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

export const getUsersData = async (_, res) => {
  try {
    const users = await User.findMany({
      select: {
        isAdmin: true,
        token: false,
        name: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    res.status(200).json({ status: "success", data: users });
  } catch (err) {
    res.status(500).json({ status: "error", message: "서버 내부 오류" });
  }
};

export const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization || `Token ${req.cookies.token}`;

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

export const authenticateAdmin = (req, res, next) => {
  if (req.user.isAdmin) {
    next();
  } else {
    res.status(403).json({ status: "error", message: "어드민이 아닙니다." });
  }
};
