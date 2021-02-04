import styled from "styled-components";

export const WrapperDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 153px;
  height: 54px;
  background-color: ${({ select }) => (select ? "#f5f6fa" : "#d8d8d8")};
  border-right: 1px solid #f5f6fa;
`;
