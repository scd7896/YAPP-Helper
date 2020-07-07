import axios from "axios";
interface IMailSendArgument {
  users: User[];
  type: string;
}
export const postMailSend = ({ users, type }: IMailSendArgument) => {
  return axios.post("/api/email/send", { user: users, type });
};
