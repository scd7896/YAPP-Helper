import * as React from "react";
import styled from "styled-components";

const Text = styled.p`
  font-weight: normal;
  font-family: "Spoqa Han Sans";
  color: #67678a;
  font-size: 11px;
  margin: 0px;
`;
const InnerInputGuideDescription = ({ children }: FontStyle) => {
  return <Text>{children}</Text>;
};

export default InnerInputGuideDescription;
