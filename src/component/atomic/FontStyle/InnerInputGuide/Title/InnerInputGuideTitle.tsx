import * as React from "react";
import styled from "styled-components";
const InnerInputTitle = styled.p`
  font-weight: bold;
  font-family: "Spoqa Han Sans";
  color: #1e2b53;
  font-size: 14px;
  margin: 0px 0px 10px 0px;
`;

const InnerInputGuideTitle = ({ children }: FontStyle) => {
  return <InnerInputTitle>{children}</InnerInputTitle>;
};

export default InnerInputGuideTitle;
