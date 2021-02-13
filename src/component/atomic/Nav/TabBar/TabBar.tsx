import * as React from "react";
import { FC } from "react";
import { WrapperDiv } from "./TabBar.styles";

interface IProp {
  isSelected: boolean;
  text: string;
  handler?: () => void;
}

const TabBar: FC<IProp> = ({ isSelected, text, handler }) => {
  return (
    <WrapperDiv select={isSelected} onClick={handler}>
      {text}
    </WrapperDiv>
  );
};

export default TabBar;
