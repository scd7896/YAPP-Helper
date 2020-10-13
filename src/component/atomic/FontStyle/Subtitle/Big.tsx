import * as React from "react";
import classNames from "classnames/bind";
import styles from "./big.scss";
const cx = classNames.bind(styles);
const BigSubTitle = ({ children }: FontStyle) => {
  return <span className={cx("big-subtitle-style")}>{children}</span>;
};

export default BigSubTitle;
