import { CertifiCate } from "@prisma/client";
import request from "utils/request";

export const getCertificateByTitle = (body: Omit<CertifiCate, "id" | "createdAt" | "updatedAt">) =>
  request.post("/api/certificate", { body });
