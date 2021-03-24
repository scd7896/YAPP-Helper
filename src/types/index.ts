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
interface CheckInterFace {
  [key: string]: boolean;
}
type FCCheckFunction<T> = (T: CheckInterFace) => (arg: any) => JSX.Element;

export * from "./viewModel";
