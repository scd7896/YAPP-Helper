import styled from "styled-components";
import * as color from "utils/styles/color";

export const ClickUnderLineSpan = styled.span`
  font-size: 16px;
  color: ${color.helper_blue};
  text-decoration: underline;
  cursor: pointer;
`;

export const EmailGradeTitleSpan = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: ${color.helper_blue};
  line-height: 1.5;
`;

export const EmailGradeSubTitleSpan = styled.span`
  font-size: 20px;
  color: ${color.gray_6};
`;
