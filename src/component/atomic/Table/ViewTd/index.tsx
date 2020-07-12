import * as React from "react";
import styles from "./styles.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
interface IProp {
  children: string;
}
const ViewTd: React.FC<IProp> = ({ children }) => {
  return (
    <td className={cx("table-data-style")}>
      <span>{children}</span>
    </td>
  );
};

export default ViewTd;
