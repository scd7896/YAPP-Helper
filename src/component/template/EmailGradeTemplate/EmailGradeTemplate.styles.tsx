import styled from "styled-components";
import * as color from "utils/styles/color";

export const WrapperHeader = styled.header`
  display: flex;
  padding: 18px 39px;
  background-color: var(--gray1);
  background-color: #ffffff;
`;

export const ContentsWrapperSection = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

export const BodyWrapperSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: ${color.gray_1};
`;
