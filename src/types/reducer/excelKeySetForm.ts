export interface excelKeySetFormState {
  name: number | null;
  email: number | null;
  isPass: number | null;
  meetingTime: number | null;
}
export type SetFormKey = "name" | "email" | "isPass" | "meetingTime";

export interface excelValueChangePayload {
  key: SetFormKey;
  value: number;
}
