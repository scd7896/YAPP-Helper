const { User } = require("../models");
const redisClient = require("../config/redis");
const jwt = require("jsonwebtoken");
const jwt_expiration = 60 * 10;
const jwt_refresh_expiration = 60 * 60 * 24 * 30;
const login = async (req, res) => {
  try {
    const user = await User.findFirst({
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
    res.status(500).send("데이터 베이스 조회 에러");
  }
};

module.exports = {
  login,
};
