import styled from "styled-components";
import * as color from "utils/styles/color";

export const IndexDiv = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${color.gray_1};
`;

export const HelperTextLogoSpan = styled.span`
  font-size: 22px;
  letter-spacing: -0.39px;
  font-weight: bold;
  margin-bottom: 14px;
  color: #1c1761;
`;

export const GoogleLoginTitleSpan = styled.span`
  font-size: 26px;
  color: ${color.gray_6};
  margin-bottom: 14px;
`;
