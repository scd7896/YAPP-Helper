import * as React from "react";
import styled from "styled-components";
import * as color from "utils/styles/color";

const backGroundColor = {
  default: color.helper_blue,
  lightBlue: color.helper_blue2,
  grayOutLine: "#ffffff",
  blueOutLine: "#ffffff",
  ghost: "inherit",
};

const textColor = {
  default: "#ffffff",
  lightBlue: color.helper_blue,
  grayOutLine: color.gray_5,
  blueOutLine: color.helper_blue,
  ghost: color.gray_5,
};

const hoverBackground = {
  default: "#063eff",
  lightBlue: "#eef1ff",
  grayOutLine: "#fafafd",
  blueOutLine: "#eef1ff",
};

const border = {
  grayOutLine: "solid 1px #e3e3e3",
  blueOutLine: `solid 1px ${color.helper_blue}`,
};

const hoverTextColor = {
  ghost: "#000000",
};

const width = {
  default: 140,
  small: 90,
};

const radius = {
  default: 4,
  small: 3,
};
const Button = styled.button`
  width: ${({ size = "default" }) => width[size]}px;
  height: 40px;
  font-size: 14px;
  border: none;
  font-weight: 500;
  background-color: ${({ concept = "default" }) => backGroundColor[concept]};
  color: ${({ concept = "default" }) => textColor[concept]};
  border: ${({ concept = "default" }) => border[concept]};
  border-radius: ${({ size = "default" }) => radius[size]}px;
  cursor: pointer;
  &:hover {
    background-color: ${({ concept = "default" }) => hoverBackground[concept]};
    color: ${({ concept = "default" }) => hoverTextColor[concept]};
  }

  &:disabled {
    background-color: ${color.gray_2};
    color: ${color.gray_4};
  }

  & + & {
    margin-left: 8px;
  }
`;

interface IProp {
  onClick?: (event: any) => void;
  children: React.ReactElement | string;
  color: "default" | "lightBlue" | "grayOutLine" | "blueOutLine" | "ghost";
  size: "default" | "small";
  disabled?: boolean;
}
const NomalButton = ({ onClick, children, color, size, disabled }: IProp) => {
  return (
    <Button concept={!disabled && color} size={size} onClick={onClick} disabled={disabled}>
      {children}
    </Button>
  );
};

export default NomalButton;
