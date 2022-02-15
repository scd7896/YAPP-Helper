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

const renderHTML = async (_, res) => {
  res.status(200).sendFile("index.html", {
     root: 'public'
   });
};

router.get("/", renderHTML);

router.get("/invitation", (_, res) => {
  res.status(200).sendFile("index.html", {
     root: 'public'
   });
});
router.get("*", [UserController.authenticateJWT, renderHTML]);


export default router;
