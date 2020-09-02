import * as React from "react";
import useNavKeyString from "hooks/useNavKeyString";
import classNames from "classnames/bind";
import styles from "./styles.scss";

interface NavTextProp extends FontStyle {
  keyString: string;
}

const cx = classNames.bind(styles);

const NavText = ({ children, keyString }: NavTextProp) => {
  const { getIsSelected } = useNavKeyString();
  return (
    <span className={cx("nav-text-style")} style={getIsSelected(keyString) ? { color: "#3d496f" } : {}}>
      {children}
    </span>
  );
};

export default NavText;
