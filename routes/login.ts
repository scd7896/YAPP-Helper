import * as express from "express";
const router = express.Router();
import { login } from "../controller/user";
router.post("/", login);

module.exports = router;
