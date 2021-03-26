import * as express from "express";
const router = express.Router();
import { authenticateJWT, authenticateAdmin } from "../controller/user";
import { findByTitle, postCertificate, getAllList } from "../controller/certificate";
import { certificateMailSend } from "../controller/email";
import { upload } from "../controller/file";

router.route("*").all([authenticateJWT, authenticateAdmin]);

router.get("/", [getAllList]);
router.get("/title", [findByTitle]);
router.post("/send", [upload.single("certifiCate"), certificateMailSend]);

router.post("/", [postCertificate]);

export default router;
