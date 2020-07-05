import * as React from "react";
import classNames from "classnames/bind";
import styles from "./styles.scss";

const cx = classNames.bind(styles);
interface IProp {
  onClick?: (event: any) => void;
  children: React.ReactElement | string;
  color: "default" | "lightBlue" | "grayOutLine" | "blueOutLine" | "ghost";
  size: "default" | "small";
  disabled?: boolean;
}
const NomalButton = ({ onClick, children, color, size, disabled }: IProp) => {
  return (
    <button className={cx("nomalButton", { [color]: !disabled }, `${size}-size`)} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default NomalButton;
