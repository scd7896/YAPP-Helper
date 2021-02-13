import styled from "styled-components";
import * as color from "utils/styles/color";

export const WrapperDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 153px;
  height: 54px;
  background-color: ${({ select }) => (select ? "#ffffff" : color.gray_2)};
  border-radius: 8px 8px 0px 0px;
  cursor: pointer;
`;
