import * as React from "react";
import classNames from "classnames/bind";
import styles from "./small.scss";
const cx = classNames.bind(styles);
const SmallSubTitle = ({ children }: FontStyle) => {
  return <span className={cx("small-subtitle-style")}>{children}</span>;
};

export default SmallSubTitle;
