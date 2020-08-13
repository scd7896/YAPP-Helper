const express = require("express");
const authMiddleWare = require("../middleware/auth");
const router = express.Router();

const apiRouter = express.Router();

apiRouter.use("/mailforms", authMiddleWare, require("./mailform"));
apiRouter.use("/email", authMiddleWare, require("./email"));
apiRouter.use("/recruit", authMiddleWare, require("./recruit"));
apiRouter.use("/login", authMiddleWare, require("./login"));
// apiRouter.use('/file', require('../controller/file'));
apiRouter.use("*", (req, res) => res.sendStatus(404));

router.use("/api", apiRouter);

router.use(express.static("public"));
router.use("/dist", express.static("dist")); // react 쓰기위한 것
router.get("/", (req, res) => res.render("index"));

router.get("*", authMiddleWare, (req, res) => res.render("index"));
module.exports = router;
