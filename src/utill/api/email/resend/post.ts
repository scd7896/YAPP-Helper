import request from "utill/request";

export const postMailSend = (key: string) => {
  return request.post("/api/email/resend", { key });
};
