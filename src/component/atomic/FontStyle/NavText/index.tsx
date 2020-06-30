import * as React from "react";
import { useMemo } from "react";
import { useRouteMatch } from "react-router-dom";
import "./styles.scss";

interface NavTextProp extends FontStyle {
  keyString: string;
}
const NavText = ({ children, keyString }: NavTextProp) => {
  const { url } = useRouteMatch();
  const isSelected = useMemo<boolean>(() => {
    try {
      const targetUrl = url.split("/")[1] as URLType;
      return targetUrl === keyString;
    } catch (err) {
      return false;
    }
  }, [url]);

  return (
    <span className="nav-text-style" style={isSelected ? { color: "#3d496f" } : {}}>
      {children}
    </span>
  );
};

export default NavText;
