import * as React from "react";
import useNavKeyString from "hooks/useNavKeyString";
import "./styles.scss";

interface NavTextProp extends FontStyle {
  keyString: string;
}
const NavText = ({ children, keyString }: NavTextProp) => {
  const { getIsSelected } = useNavKeyString();
  return (
    <span className="nav-text-style" style={getIsSelected(keyString) ? { color: "#3d496f" } : {}}>
      {children}
    </span>
  );
};

export default NavText;
