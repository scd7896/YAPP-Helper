import styled from "styled-components";
import * as color from "utils/styles/color";

export const WrapperDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: ${color.gray_pale};
`;

export const TitleHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;
