import { User } from "@types";
import { MailState } from "./mail";

export interface DesireState {
  keys: Array<string>;
  users: Array<Array<string>>;
  allList: Array<User>;
  isError: boolean | null;
  mailTemplates?: MailState[] | null;
  filename: null | string;
}

export type FormKeyType = "email" | "name" | "isPass" | "meetingTime";

export interface SendUserResult {
  user: string;
  isError: boolean;
}
