import * as React from "react";
import styled from "styled-components";
const Picture = styled.picture`
  width: 165px;
  height: 73px;
  background-color: rgba(255, 0, 167, 0.35);
`;
interface BigIconWrapperProp {
  children?: React.ReactElement;
}

const BigIconWrapper = ({ children }: BigIconWrapperProp) => {
  return <Picture>{children}</Picture>;
};

export default BigIconWrapper;
