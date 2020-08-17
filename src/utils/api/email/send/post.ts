import request from "utils/request";
interface IMailSendArgument {
  users: User[];
  type: string;
}
export const postMailSend = ({ users, type }: IMailSendArgument) => {
  return request.post("/api/email/send", {
    body: { users: users.map((user) => ({ ...user, pass: user.isPass })), type },
  });
};
