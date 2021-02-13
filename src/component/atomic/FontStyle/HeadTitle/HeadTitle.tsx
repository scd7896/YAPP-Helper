import * as React from "react";
import styled from "styled-components";

const TitleTextP = styled.p`
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

type FontStyle = {
  children: React.ReactElement | string;
};

const HeadTitleText = ({ children }: FontStyle) => {
  return <TitleTextP>{children}</TitleTextP>;
};

export default HeadTitleText;
