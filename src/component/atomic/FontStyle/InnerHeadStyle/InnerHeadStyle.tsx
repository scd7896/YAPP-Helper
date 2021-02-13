import * as React from "react";
import styled from "styled-components";
const InnerHeadText = styled.p`
  font-family: "Spoqa Han Sans";
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  color: #1e2b53;
  letter-spacing: -0.96px;
  font-size: 20px;
  margin-top: 0px;
  margin-bottom: 0px;
`;
const InnerHeadStyle = ({ children }: FontStyle) => {
  return <InnerHeadText>{children}</InnerHeadText>;
};

export default InnerHeadStyle;
