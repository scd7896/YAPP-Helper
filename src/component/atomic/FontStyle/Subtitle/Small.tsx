import * as React from "react";
import * as color from "utils/styles/color";
import styled from "styled-components";
const Text = styled.span`
  font-family: "Spoqa Han Sans";
  font-size: 14px;
  font-weight: bold;
  color: ${color.blue_3};
`;

const SmallSubTitle = ({ children }: FontStyle) => {
  return <Text>{children}</Text>;
};

export default SmallSubTitle;
