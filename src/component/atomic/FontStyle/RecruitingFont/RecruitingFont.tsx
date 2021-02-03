import * as React from "react";
import styled from "styled-components";
const Text = styled.p`
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.25px;
  color: var(--gray6);
  word-break: keep-all;
`;

const RecruitingFont = ({ children }: FontStyle) => {
  return <Text>{children}</Text>;
};

export default RecruitingFont;
