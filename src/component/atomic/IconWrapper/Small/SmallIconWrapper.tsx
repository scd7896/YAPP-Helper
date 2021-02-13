import * as React from "react";
import styled from "styled-components";
const WrapperPicutre = styled.picture`
  display: flex;
`;
interface SmallIconWrapperProp {
  children?: React.ReactElement | string;
  width: number;
  height: number;
}

const SmallIconWrapper = ({ children, width, height }: SmallIconWrapperProp) => {
  return <WrapperPicutre style={{ width: `${width}px`, height: `${height}px` }}>{children}</WrapperPicutre>;
};

export default SmallIconWrapper;
