import styled from "styled-components";
import * as color from "utils/styles/color";
export const WrapperMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${color.gray_1};
`;

export const ContentsWrapperSection = styled.section`
  width: 1024px;
  text-align: left;
`;

export const TitleLogoHeader = styled.header`
  font-size: 22px;
  font-weight: bold;
  color: #1c1761;
  margin-bottom: 70px;
`;

export const PageTitleSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 34px;
`;

export const LinkBoxWrapperSection = styled.section`
  display: flex;
`;
