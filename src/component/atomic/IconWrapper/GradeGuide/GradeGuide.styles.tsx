import styled from "styled-components";
import * as color from "utils/styles/color";
export const GradeIconWrapperDiv = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 10px;
`;

export const GradeNumIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 9px;
  width: 15px;
  border-radius: 100%;
  color: ${({ isAccepted }) => (isAccepted ? color.helper_blue : color.gray_4)};
  line-height: 1.5;
  background-color: ${({ isAccepted }) => (isAccepted ? color.light_blue_1 : color.gray_2)};
`;

export const GradeIconTextP = styled.p`
  font-family: "Spoqa Han Sans";
  font-size: 12px;
  letter-spacing: -0.44px;
  margin-left: 5px;
  color: ${({ isAccepted }) => (isAccepted ? color.helper_blue : color.gray_5)};
  font-weight: ${({ isAccepted }) => isAccepted && "bold"};
`;
