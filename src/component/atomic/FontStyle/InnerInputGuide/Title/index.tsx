import * as React from "react";
import classNames from "classnames/bind";
import styles from "./styles.scss";
const cx = classNames.bind(styles);
const InnerInputGuideTitle = ({ children }: FontStyle) => {
  return <p className={cx("inner-inputtitle-style")}>{children}</p>;
};

export default InnerInputGuideTitle;
