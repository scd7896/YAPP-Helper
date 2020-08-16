import * as React from "react";
import classNames from "classnames/bind";
import styles from "./styles.scss";
interface IProp {
  children: string | React.ElementType;
}
const cx = classNames.bind(styles);
const EmailGradeTitle: React.FC<IProp> = ({ children }) => {
  return <span className={cx("title")}>{children}</span>;
};
export default EmailGradeTitle;
