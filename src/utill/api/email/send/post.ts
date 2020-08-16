import axios from "axios";
interface IMailSendArgument {
  users: User[];
  type: string;
}
export const postMailSend = ({ users, type }: IMailSendArgument) => {
  return axios.post("/api/email/send", { users: users.map((user) => ({ ...user, pass: user.isPass })), type });
};
