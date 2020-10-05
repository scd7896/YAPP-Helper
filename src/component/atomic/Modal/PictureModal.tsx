import * as React from "react";
import { FC } from "react";
import classNames from "classnames/bind";
import styles from "./PictureModal.module.scss";

interface IProp {
  src: string;
  isOpen: boolean;
  onClick?: () => void;
}

const cx = classNames.bind(styles);
const PictureModal: FC<IProp> = ({ src, isOpen, onClick }) => {
  return (
    <div className={cx("wrapper", { close: !isOpen })} onClick={onClick}>
      <img src={src} className={cx("pictureWrapper")} />
    </div>
  );
};

export default PictureModal;
