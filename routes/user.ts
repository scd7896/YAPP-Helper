import * as express from "express";
import * as UserController from "../controller/user";

const router = express.Router();

router.route("*").all([UserController.authenticateJWT, UserController.authenticateAdmin]);

router.get("/", [UserController.getUsersData]);

export default router;
