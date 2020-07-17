import * as React from "react";
import SmallIconWrapper from "../../atomic/IconWrapper/Small";
import { Link, useRouteMatch } from "react-router-dom";
import NavText from "../../atomic/FontStyle/NavText";

import "./styles.scss";

interface NavLinkProp {
  children: string;
  to: string;
  keyString: string;
  className?: string;
}

const NavLink = ({ children, to, keyString, className }: NavLinkProp) => {
  const match = useRouteMatch();

  return (
    <article className={`nav-link-clicker ${className ? className : ""}`}>
      <SmallIconWrapper width={16} height={16}></SmallIconWrapper>
      <div className="anchor-leftmargin-wrapper">
        <Link to={to}>
          <NavText keyString={keyString}>{children}</NavText>
        </Link>
      </div>
    </article>
  );
};

export default NavLink;
