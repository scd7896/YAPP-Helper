import styled from "styled-components";

export const FileDropBoxDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 346px;
  border-radius: 6px;
  border: 1px dashed #d8d8d8;
  background-color: ${({ isOver }) => (isOver ? "rgba(228, 230, 240, 0.5)" : "#fbfbfd")};
`;

export const IconMarginWrapperDiv = styled.div`
  margin-bottom: 18px;
`;

export const DropBoxGuideTextP = styled.p`
  font-size: 12px;
  line-height: 1.67;
  letter-spacing: -0.44px;
  margin: 0px;
  color: #a0a0a0;
`;

export const DropBoxFileButtonP = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 40px;
  border-radius: 4px;
  background-color: silver;
  cursor: pointer;
`;
