import * as React from "react";
import styled from "styled-components";
const Text = styled.p`
  font-size: 14px;
  color: var(--gray6);
  word-break: keep-all;
  width: 79px;
`;

const RecruitingFont = ({ children }: FontStyle) => {
  return <Text>{children}</Text>;
};

export default RecruitingFont;
