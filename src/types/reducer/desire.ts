interface DesireState {
  keys: Array<string>;
  users: Array<Array<string>>;
  allList: Array<User>;
  isError: boolean;
  mailTemplates?: MailState[] | null;
}

type FormKeyType = "email" | "name" | "isPass" | "meetingTime";
