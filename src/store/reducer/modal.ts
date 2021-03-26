import { ModalStore } from "@types";
import { MODAL_CLOSE, MODAL_OPEN } from "actions/actionTypes";
import { ModalActionTypes } from "actions/modal";
const initalState: ModalStore = {
  isOpen: false,
};
const modal = (state = initalState, action: ModalActionTypes) => {
  switch (action.type) {
    case MODAL_OPEN:
      return {
        ...state,
        isOpen: true,
        Component: action.payload,
      };
    case MODAL_CLOSE:
      return initalState;
    default:
      return { ...state };
  }
};

export default modal;
