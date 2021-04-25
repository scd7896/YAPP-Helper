import styled from "styled-components";
import * as color from "utils/styles/color";

export const WrapperDiv = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: ${color.white};
`;

export const ContentsWrapperDiv = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 10;
`;

export const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 5;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
