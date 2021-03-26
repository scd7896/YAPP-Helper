export interface User {
  email: string;
  name: string;
  isPass: boolean;
  isError?: boolean | null;
  meetingTime?: string | null;
}

export interface FontStyle {
  children: string;
}
export interface CheckInterFace {
  [key: string]: boolean;
}
export type FCCheckFunction<T> = (T: CheckInterFace) => (arg: any) => JSX.Element;

export * from "./viewModel";
export * from "./reducer";
