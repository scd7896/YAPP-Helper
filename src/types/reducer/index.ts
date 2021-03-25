import { DesireState } from "./desire";
import { excelKeySetFormState } from "./excelKeySetForm";
import { MailInputState } from "./mail";
import { ModalStore } from "./modal";
import { RecruitState } from "./recruit";

export interface RootStore {
  mail: MailInputState;
  desire: DesireState;
  excelKeySetForm: excelKeySetFormState;
  recruit: RecruitState;
  modal: ModalStore;
}

export * from "./desire";
export * from "./excelKeySetForm";
export * from "./mail";
export * from "./modal";
export * from "./recruit";
