import request from "utils/request";

export const getCertificateByTitle = () => request.get("/api/certificate");
