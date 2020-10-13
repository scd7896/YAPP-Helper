import * as React from "react";
import classNames from "classnames/bind";
import styles from "./styles.scss";
const cx = classNames.bind(styles);
const InnerHeadStyle = ({ children }: FontStyle) => {
  return <p className={cx("inner-head-text-style")}>{children}</p>;
};

export default InnerHeadStyle;
