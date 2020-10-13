import * as React from "react";
import classNames from "classnames/bind";
import styles from "./style.scss";
const cx = classNames.bind(styles);
const RecruitingFont = ({ children }: FontStyle) => {
  return <p className={cx("yapp-recruiting-font")}>{children}</p>;
};

export default RecruitingFont;
