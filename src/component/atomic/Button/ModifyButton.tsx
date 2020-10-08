import * as React from "react";
import classNames from "classnames/bind";
import styles from "./ModifyButton.module.scss";

interface IProp {
  onClick?: () => void;
  children: string;
}

const cx = classNames.bind(styles);

const ModifyButton: React.FC<IProp> = ({ onClick, children }) => {
  return (
    <button className={cx("button")} onClick={onClick}>
      {children}
    </button>
  );
};

export default ModifyButton;
