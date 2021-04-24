import { MODAL_OPEN, MODAL_CLOSE } from "./actionTypes";

interface ModalOpenPayload {
  Component: () => JSX.Element;
  options?: any;
}

export const modalOpenActionCreate = (payload: ModalOpenPayload) => ({
  type: MODAL_OPEN,
  payload,
});

export const modalCloseActionCreate = () => ({
  type: MODAL_CLOSE,
});

export type ModalActionTypes = ReturnType<typeof modalOpenActionCreate> | ReturnType<typeof modalCloseActionCreate>;
