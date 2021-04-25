import { useCallback } from "react";
import { modalCloseActionCreate, modalOpenActionCreate } from "actions/modal";
import { useDispatch, useSelector } from "react-redux";
import { ModalOption, RootStore } from "@types";

const useModal = () => {
  const dispatch = useDispatch();
  const { isOpen, Component, onClose } = useSelector<RootStore, RootStore["modal"]>((state) => state.modal);

  const closeModal = useCallback(
    (excuteOnClose?: boolean) => {
      dispatch(modalCloseActionCreate());
      if (onClose && excuteOnClose) {
        onClose();
      }
    },
    [dispatch, onClose]
  );

  const openModal = useCallback(
    (component: () => JSX.Element, options?: ModalOption) => {
      dispatch(modalOpenActionCreate({ Component: component, options }));
    },
    [dispatch]
  );

  return { isOpen, Component, closeModal, openModal };
};

export default useModal;
