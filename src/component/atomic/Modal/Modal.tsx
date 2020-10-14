import * as React from "react";
import styles from "./Modal.module.scss";
import classNames from "classnames/bind";
import useModal from "hooks/useModal";
const cx = classNames.bind(styles);
const Modal = () => {
  const { isOpen, Component, closeModal } = useModal();
  console.log(styles);

  return (
    <>
      {isOpen && (
        <div className={cx("wrapper")} onClick={closeModal}>
          <Component />
        </div>
      )}
    </>
  );
};
export default Modal;
