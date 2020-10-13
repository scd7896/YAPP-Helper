import * as React from "react";
import classNames from "classnames/bind";
import styles from "./styles.scss";

type FontStyle = {
  children: React.ReactElement | string;
};
const cx = classNames.bind(styles);
const HeadTitleText = ({ children }: FontStyle) => {
  return <p className={cx("title-text-style")}>{children}</p>;
};

export default HeadTitleText;
