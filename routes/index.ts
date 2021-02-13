import * as express from "express";
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
router.use("/dist", express.static("dist")); // react 쓰기위한 것
router.get("*", (req, res) => res.render("index"));

module.exports = router;
