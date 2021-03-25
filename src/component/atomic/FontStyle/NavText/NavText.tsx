import * as React from "react";
import useNavKeyString from "hooks/useNavKeyString";
import styled from "styled-components";
import { FontStyle } from "@types";

const Text = styled.span`
  font-family: "Spoqa Han Sans";
  font-size: 12px;
`;
interface NavTextProp extends FontStyle {
  keyString: string;
}

const NavText = ({ children, keyString }: NavTextProp) => {
  const { getIsSelected } = useNavKeyString();
  return <Text style={getIsSelected(keyString) ? { color: "#3d496f" } : {}}>{children}</Text>;
};

export default NavText;
