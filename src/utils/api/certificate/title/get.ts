import request from "utils/request";

export const getCertificateByTitle = (title) => request.get("/api/certificate/title", { title });
