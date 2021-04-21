import * as express from "express";
const router = express.Router();
import { authenticateJWT, authenticateAdmin } from "../controller/user";
import { findByUniqueById, findByTitle, postCertificate, getAllList } from "../controller/certificate";
import { certificateMailSend } from "../controller/email";
import { upload } from "../controller/file";

router.route("*").all([authenticateJWT, authenticateAdmin]);

router.post("/send", [upload.single("certifiCate"), certificateMailSend]);
router.get("/title", findByTitle);
router.get("/:id", findByUniqueById);

router.get("/", getAllList);
router.post("/", [postCertificate]);

export default router;
