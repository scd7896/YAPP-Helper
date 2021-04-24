import styled from "styled-components";
import * as color from "utils/styles/color";

export { default as ModifyButton } from "./Button/ModifyButton";
export { default as NomalButton } from "./Button/NomalButton";

export { default as FileInput } from "./File/Input/ExelFileInput";
export { default as FileInputSecond } from "./File/FileInput/FileInput";
export { default as BasicFileInput } from "./File/BasicFileInput";

export { default as TextInput } from "./TextInput/TextInput";

export { default as MailWriter } from "./MailWriter";

export { default as Modal } from "./Modal/Modal";

export { default as GradeGuideIcon } from "./IconWrapper/GradeGuide/GradeGuide";
export { default as ArrowIcon } from "./IconWrapper/ArrowIcon/ArrowIcon";

export { default as ToggleButton } from "./InputStyle/Recruit/ToggleButton/ToggleButton";

export { default as LinkBlock } from "./LinkBlock/LinkBlock";
export { default as SmallIconWrapper } from "./IconWrapper/Small/SmallIconWrapper";

export { default as PageHeader } from "./PageHeader/PageHeader";
export { default as TabBar } from "./Nav/TabBar/TabBar";
export { default as Form } from "./Form/Form";

export const FileButton = styled.button`
  width: 120px;
  height: 40px;
  border-radius: 4px;
  background-color: #ffffff;
  border: solid 1px #e3e3e3;
  color: ${color.gray_5};
  font-size: 14px;
  cursor: pointer;
`;

export const Input = styled.input`
  width: ${({ width }) => `${width || 257}px`};
  height: ${({ height }) => (height ? `${height}px` : "40px")};
  border: solid 1px ${color.gray_2};
  border-radius: ${({ borderRadius }) => (borderRadius ? `${borderRadius}px` : "4px")};
  padding: ${({ padding }) => (padding ? `${padding}` : "10px 12px")};
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "14px")};
  color: ${({ fontColor }) => `${fontColor || color.gray_5}`};
  &::placeholder {
    color: ${(placeHolderColor) => (placeHolderColor ? `${placeHolderColor}` : color.gray_4)};
  }
`;
