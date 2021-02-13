import styled from "styled-components";

export const GradeIconWrapperDiv = styled.div`
  display: flex;
  align-items: center;
  margin-right: 4px;
  margin-left: 4px;
`;

export const GradeNumIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 9px;
  width: 15px;
  height: 13px;
  padding-top: 2px;
  border-radius: 7px;
  color: #ffffff;
  background-color: ${({ isAccepted }) => (isAccepted ? "#3751ff" : "#bcbbd6")};
`;

export const GradeIconTextP = styled.p`
  font-family: "Spoqa Han Sans";
  font-size: 12px;
  letter-spacing: -0.44px;
  margin-left: 5px;
  color: #3751ff;
  font-weight: ${({ isAccepted }) => isAccepted && "bold"};
`;
