const jwt = require("jsonwebtoken");
const redisClient = require("../config/redis");
const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];
    redisClient.get(token, (err, reply) => {
      if (err) {
        return res.sendStatus(403);
      }
      console.log(reply);
      req.user = JSON.parse(reply);
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

module.exports = authenticateJWT;
