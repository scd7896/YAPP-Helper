import * as React from "react";
import classNames from "classnames/bind";
import styles from "./styles.scss";
import { Link, useRouteMatch } from "react-router-dom";
import NavText from "atomic/FontStyle/NavText/NavText";

interface NavLinkProp {
  children: string;
  to: string;
  keyString: string;
  className?: string;
}

const cx = classNames.bind(styles);
const NavLink = ({ children, to, keyString, className }: NavLinkProp) => {
  const match = useRouteMatch();

  return (
    <Link to={to} className={cx("anchor-style")}>
      <NavText keyString={keyString}>{children}</NavText>
    </Link>
  );
};

export default NavLink;
