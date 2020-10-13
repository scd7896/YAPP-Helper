import * as React from "react";
import classNames from "classnames/bind";
import styles from "./styles.scss";

interface BigIconWrapperProp {
  children?: React.ReactElement;
}
const cx = classNames.bind(styles);
const BigIconWrapper = ({ children }: BigIconWrapperProp) => {
  return <picture className={cx("big_icon_wrapper")}>{children}</picture>;
};

export default BigIconWrapper;
