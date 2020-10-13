import * as React from "react";
import classNames from "classnames/bind";
import styles from "./styles.scss";
const cx = classNames.bind(styles);
const StatusTtitle = ({ children }: FontStyle) => {
  return <p className={cx("status-title-style")}>{children}</p>;
};

export default StatusTtitle;
