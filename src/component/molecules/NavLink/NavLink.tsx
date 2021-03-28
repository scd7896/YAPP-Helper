import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { NavText } from "@font";

export const StyleLink = styled(Link)`
  text-decoration: none;
  color: #919bb0;
  margin-left: 11px;
  &:hover {
    color: #3d496f;
  }
`;

interface NavLinkProp {
  children: string;
  to: string;
  keyString: string;
  className?: string;
}

const NavLink = ({ children, to, keyString, className }: NavLinkProp) => {
  return (
    <StyleLink to={to} key={to}>
      <NavText keyString={keyString.toLowerCase()}>{children}</NavText>
    </StyleLink>
  );
};

export default NavLink;
