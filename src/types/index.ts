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
export type FCCheckFunction<T> = (t: CheckInterFace) => (arg: any) => JSX.Element;

export interface TableColumn {
  dataIndex: string;
  title: string;
  render?: (rowItem, index) => JSX.Element;
}

export * from "./viewModel";
export * from "./reducer";
