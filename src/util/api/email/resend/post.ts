import axios from "axios";

export const postMailSend = (key: string) => {
  return axios.post("/api/email/resend", { key });
};
