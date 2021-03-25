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

export const HeadTitleText = styled.p`
  font-family: "Spoqa Han Sans";
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  color: #1e2b53;
  letter-spacing: -0.96px;
  font-size: 26px;
  margin-top: 0px;
  margin-bottom: 0px;
`;
export const BigSubTitle = styled.span`
  font-family: "Spoqa Han Sans";
  font-size: 26px;
  color: ${color.gray_6};
  letter-spacing: -0.54px;
  line-height: 1.69;
`;

export const SmallSubTitle = styled.span`
  font-family: "Spoqa Han Sans";
  font-size: 14px;
  font-weight: bold;
  color: ${color.blue_3};
`;

export const RecruitingFont = styled.p`
  font-size: 14px;
  color: var(--gray6);
  word-break: keep-all;
  width: 79px;
`;

export { default as NavText } from "./NavText/NavText";
