import * as React from "react";
import * as color from "utils/styles/color";
import styled from "styled-components";
const Text = styled.span`
  font-family: "Spoqa Han Sans";
  font-size: 26px;
  color: ${color.gray_6};
  letter-spacing: -0.54px;
  line-height: 1.69;
`;
const BigSubTitle = ({ children }: FontStyle) => {
  return <Text>{children}</Text>;
};

export default BigSubTitle;
