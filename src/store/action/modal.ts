import { MODAL_OPEN, MODAL_CLOSE } from "./actionTypes";

export const modalOpenActionCreate = (payload: () => JSX.Element) => {
  return {
    type: MODAL_OPEN,
    payload,
  };
};

export const modalCloseActionCreate = () => ({
  type: MODAL_CLOSE,
});

export type ModalActionTypes = ReturnType<typeof modalOpenActionCreate> | ReturnType<typeof modalCloseActionCreate>;
