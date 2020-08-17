import request from "utils/request";

export const postMailSend = (key: string) => {
  return request.post("/api/email/resend", { body: { key } });
};
