import * as React from "react";
import useModal from "hooks/useModal";
import { WrapperDiv, ContentWrapperDiv } from "./Modal.styles";

const Modal = () => {
  const contentWrapperRef = React.useRef(null);
  const { isOpen, Component, closeModal } = useModal();

  React.useEffect(() => {
    const clickEventListner = (e) => {
      let parent = e.target.parentNode;
      while (parent) {
        if (parent === contentWrapperRef.current) {
          break;
        }
        parent = parent.parentNode;
      }

      if (parent === null) closeModal();
    };
    if (isOpen) window.addEventListener("click", clickEventListner);
    else window.removeEventListener("click", clickEventListner);
    return () => {
      window.removeEventListener("click", clickEventListner);
    };
  }, [closeModal, isOpen]);

  return (
    <>
      {isOpen && (
        <WrapperDiv>
          <ContentWrapperDiv ref={contentWrapperRef}>
            <Component />
          </ContentWrapperDiv>
        </WrapperDiv>
      )}
    </>
  );
};
export default Modal;
