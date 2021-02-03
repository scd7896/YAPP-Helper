import * as React from "react";
import styled from "styled-components";
import * as color from "utils/styles/color";

const Button = styled.button`
  width: 120px;
  height: 40px;
  border-radius: 4px;
  background-color: ${color.white};
  border: solid 1px ${color.helper_blue};
  font-size: 14px;
  font-weight: 500;
  color: ${color.helper_blue};
`;
interface IProp {
  onClick?: () => void;
  children: string;
}

const ModifyButton: React.FC<IProp> = ({ onClick, children }) => {
  return <Button onClick={onClick}>{children}</Button>;
};

export default ModifyButton;
