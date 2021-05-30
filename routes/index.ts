import * as express from "express";
import axios from "axios";
import * as UserController from "../controller/user";
import mailformRoute from "./mailform";
import emailRoute from "./email";
import recruitRoute from "./recruit";
import loginRoute from "./login";
import userRoute from "./user";
import invitationRoute from "./invitation";
import certifiCate from "./certificate";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { version } = require("../package.json");

const router = express.Router();

const apiRouter = express.Router();

apiRouter.use("/mailforms", mailformRoute);
apiRouter.use("/email", emailRoute);
apiRouter.use("/recruit", recruitRoute);
apiRouter.use("/login", loginRoute);
apiRouter.use("/users", userRoute);
apiRouter.use("/invitation", invitationRoute);
apiRouter.use("/certificate", certifiCate);
// apiRouter.use('/file', require('../controller/file'));
apiRouter.use("*", (req, res) => res.sendStatus(404));

router.use("/api", apiRouter);

router.use(express.static("public"));
router.use("/static", express.static("static"));

const renderHTML = async (_, res) => {
  const encodeVersion = encodeURIComponent(version);
  // eslint-disable-next-line operator-linebreak
  const url =
    process.env.NODE_ENV === "production" && false
      ? `https://static-yapp-helper.s3.ap-northeast-2.amazonaws.com/dist/${encodeVersion}/index.html`
      : "/index.html";
  const response = await axios.get(url);
  const html = response.data;
  res.setHeader("Content-Type", "text/html");
  res.status(200).send(html);
};

router.get("/", renderHTML);

router.get("/invitation", (_, res) => {
  res.status(200).render("index.html");
});

router.get("*", [UserController.authenticateJWT, renderHTML]);
export default router;
