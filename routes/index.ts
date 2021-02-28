import * as express from "express";
import * as UserController from "../controller/user";
const router = express.Router();

const apiRouter = express.Router();

apiRouter.use("/mailforms", require("./mailform"));
apiRouter.use("/email", require("./email"));
apiRouter.use("/recruit", require("./recruit"));
apiRouter.use("/login", require("./login"));
// apiRouter.use('/file', require('../controller/file'));
apiRouter.use("*", (req, res) => res.sendStatus(404));

router.use("/api", apiRouter);

router.use(express.static("public"));

router.get("/", (req, res) => {
  res.status(200).render("index.html");
});

router.get("*", [
  UserController.authenticateJWT,
  (req, res) => {
    res.status(200).render("index.html");
  },
]);
module.exports = router;
