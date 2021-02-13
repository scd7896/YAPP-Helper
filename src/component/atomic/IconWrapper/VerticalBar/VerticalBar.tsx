import * as React from "react";
import styled from "styled-components";
const Bar = styled.div`
  display: inline-block;
  height: 24px;
  border-right: 2px solid #f7f8fc;
  margin-left: 38px;
  margin-right: 38px;
`;

const VerticalBar = () => {
  return <Bar>&nbsp;</Bar>;
};

export default VerticalBar;
