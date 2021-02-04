import * as React from "react";
import { WrapperDiv } from "./Modal.styles";
import useModal from "hooks/useModal";
const Modal = () => {
  const { isOpen, Component, closeModal } = useModal();

  return (
    <>
      {isOpen && (
        <WrapperDiv onClick={closeModal}>
          <Component />
        </WrapperDiv>
      )}
    </>
  );
};
export default Modal;
