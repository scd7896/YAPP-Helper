/* eslint-disable object-curly-newline */
import * as express from "express";
import { authenticateJWT, authenticateAdmin } from "../controller/user";
import { findByUniqueById, findByTitle, postCertificate, getAllList, putCertificate } from "../controller/certificate";
import { certificateMailSend } from "../controller/email";
import { upload } from "../controller/file";

const router = express.Router();

router.route("*").all([authenticateJWT, authenticateAdmin]);

router.post("/send", [upload.single("certifiCate"), certificateMailSend]);
router.get("/title", findByTitle);
router.get("/:id", findByUniqueById);
router.put("/:id", [upload.single("backgroundImage"), putCertificate]);

router.get("/", getAllList);
router.post("/", [upload.single("backgroundImage"), postCertificate]);

export default router;
