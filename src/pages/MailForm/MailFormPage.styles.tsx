import styled from "styled-components";
import * as color from "utils/styles/color";

export const BodySection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${color.gray_1};
  padding: 50px 107px;
`;

export const FormWrapperDiv = styled.div`
  flex: 1;
`;

export const TabBarWrapperDiv = styled.div`
  display: flex;
  background-color: ${color.gray_2};
  border-radius: 8px 8px 0px 0px;
`;
