interface DesireState {
  keys: Array<string>;
  users: Array<Array<string>>;
  allList: Array<User>;
  isError: boolean | null;
  mailTemplates?: MailState[] | null;
  filename: null | string;
}

type FormKeyType = "email" | "name" | "isPass" | "meetingTime";

interface SendUserResult {
  user: string;
  isError: boolean;
}
