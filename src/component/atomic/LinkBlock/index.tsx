import * as React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./styles.scss";
interface LinkBlockProp {
  children: React.ReactElement | React.ReactElement[];
  to: string;
}
const cx = classNames.bind(styles);
const LinkBlock = ({ children, to }: LinkBlockProp) => {
  return (
    <div className={cx("link-box-container")}>
      <Link to={to}>{children}</Link>
    </div>
  );
};

export default LinkBlock;
