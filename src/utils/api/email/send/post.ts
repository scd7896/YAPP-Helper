import request from "utils/request";
import { User } from "@types";
interface IMailSendArgument {
  users: User[];
}
export const postMailSend = ({ users }: IMailSendArgument) => {
  return request.post("/api/email/send", {
    body: { users: users.map((user) => ({ ...user, pass: user.isPass })) },
  });
};
