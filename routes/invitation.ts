import * as express from "express";
import { authenticateJWT, authenticateAdmin, invitationUser } from "../controller/user";
import { sendInvitationMail } from "../controller/email";
const router = express.Router();

router.post("/", [invitationUser]);
router.post("/send", [authenticateJWT, authenticateAdmin, sendInvitationMail]);

export default router;
