import { useCallback } from "react";
import { modalCloseActionCreate, modalOpenActionCreate } from "actions/modal";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "@types";

const useModal = () => {
  const dispatch = useDispatch();
  const { isOpen, Component } = useSelector<RootStore, RootStore["modal"]>((state) => state.modal);

  const closeModal = useCallback(() => {
    dispatch(modalCloseActionCreate());
  }, [dispatch]);

  const openModal = useCallback(
    (payload: () => JSX.Element) => {
      dispatch(modalOpenActionCreate(payload));
    },
    [dispatch]
  );

  return { isOpen, Component, closeModal, openModal };
};

export default useModal;
