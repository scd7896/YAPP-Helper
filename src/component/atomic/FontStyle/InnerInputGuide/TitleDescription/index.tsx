import * as React from "react";
import classNames from "classnames/bind";
import styles from "./styles.scss";

const cx = classNames.bind(styles);
const InnerInputGuideDescription = ({ children }: FontStyle) => {
  return <p className={cx("inner-inputguide-description-style")}>{children}</p>;
};

export default InnerInputGuideDescription;
