interface User {
  email: string;
  name: string;
  isPass: boolean;
  isError?: boolean | null;
  meetingTime?: string | null;
}

interface FontStyle {
  children: string;
}
