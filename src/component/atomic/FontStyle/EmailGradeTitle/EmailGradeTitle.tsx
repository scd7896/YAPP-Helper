import * as React from "react";
import styled from "styled-components";
import * as color from "utils/styles/color";

const TitleSpan = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: ${color.helper_blue};
`;
interface IProp {
  children: string | React.ElementType;
}

const EmailGradeTitle: React.FC<IProp> = ({ children }) => {
  return <TitleSpan>{children}</TitleSpan>;
};
export default EmailGradeTitle;
