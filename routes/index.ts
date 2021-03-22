import * as express from "express";
import * as UserController from "../controller/user";
import mailformRoute from "./mailform";
import emailRoute from "./email";
import recruitRoute from "./recruit";
import loginRoute from "./login";
import userRoute from "./user";
import invitationRoute from "./invitation";

const router = express.Router();

const apiRouter = express.Router();

apiRouter.use("/mailforms", mailformRoute);
apiRouter.use("/email", emailRoute);
apiRouter.use("/recruit", recruitRoute);
apiRouter.use("/login", loginRoute);
apiRouter.use("/users", userRoute);
apiRouter.use("/invitation", invitationRoute);
// apiRouter.use('/file', require('../controller/file'));
apiRouter.use("*", (req, res) => res.sendStatus(404));

router.use("/api", apiRouter);

router.use(express.static("public"));

router.get("/", (_, res) => {
  res.status(200).render("index.html");
});

router.get("/invitation", (_, res) => {
  res.status(200).render("index.html");
});

router.get("*", [
  UserController.authenticateJWT,
  (req, res) => {
    res.status(200).render("index.html");
  },
]);
module.exports = router;
