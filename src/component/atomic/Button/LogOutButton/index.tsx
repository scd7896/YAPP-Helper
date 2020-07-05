import * as React from "react";
import classNames from "classnames/bind";
import styles from "./styles.scss";
import { LogOutIcon } from "../../Icon";

const cx = classNames.bind(styles);

const LogOutButton = () => (
  <button className={cx("logoutButton")}>
    <LogOutIcon /> &nbsp;로그아웃
  </button>
);
export default LogOutButton;
