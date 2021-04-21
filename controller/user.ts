import * as jwt from "jsonwebtoken";
import * as crypto from "crypto";
import { createJsend } from "../lib";
import { UserModel } from "../models";
import redisClient from "../config/redis";
import { Users } from "@prisma/client";

const createJWTToken = (user: Pick<Users, "name" | "token" | "isAdmin">) => {
  const token = jwt.sign({ name: user.name, token: user.token, isAdmin: user.isAdmin }, process.env.JWT_SECRET);
  redisClient.set(token, JSON.stringify(user));
  return token;
};

export const login = async (req, res) => {
  try {
    const accessToken = crypto.createHash("sha512").update(req.body.email).digest("base64");
    const user = await UserModel.findByUniqueByToken(accessToken);
    if (!user) {
      return res.status(403).send("로그인 정보가 맞지않습니다");
    }
    const token = createJWTToken(user);

    res.status(200).json({ token });
  } catch (err) {
    console.log(err);
    res.status(500).send("데이터 베이스 조회 에러");
  }
};

export const getUsersData = async (_, res) => {
  try {
    const users = await UserModel.findUserList();
    res.status(200).json({ status: "success", data: users });
  } catch (err) {
    res.status(500).json({ status: "error", message: "서버 내부 오류" });
  }
};

export const invitationUser = (req, res) => {
  const token = req.body.token;
  if (!token) {
    return res.status(400).json(createJsend("failure", "토큰이 없습니다"));
  }

  jwt.verify(decodeURIComponent(token), process.env.JWT_SECRET, async (err, decoded) => {
    if (err) {
      return res.status(403).json(createJsend("failure", err.message));
    }
    const user = await UserModel.addUpsertUser(decoded.mail);
    const token = createJWTToken(user);
    return res.status(200).json({ token });
  });
};

export const deleteUser = async (req, res) => {
  const id = req.params.id;
  if (isNaN(Number(id))) {
    return res.status(400).json(createJsend("failure", "잘못된 유저번호입니다."));
  }
  try {
    await UserModel.deleteUser(Number(id));
    res.status(200).json(createJsend("success", "삭제 성공"));
  } catch (err) {
    res.status(500).json(createJsend("failure", err));
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
