import styled from "styled-components";
import * as color from "utils/styles/color";

export const FileDropBoxDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 346px;
  border-radius: 6px;
  border: 1px dashed #d8d8d8;
  background-color: ${({ isUploaded, isOver }) => {
    if (isOver) {
      return "rgba(228, 230, 240, 0.5)";
    }
    if (isUploaded) {
      return "#f8faff";
    }
    return "#fbfbfd";
  }};
`;

export const IconMarginDiv = styled.div`
  margin-bottom: 18px;
`;

export const DropBoxGuideTextSpan = styled.span`
  font-size: 16px;
  letter-spacing: -0.44px;
  margin: 0px;
  margin-bottom: ${({ isUploaded }) => (isUploaded ? "10px" : "5px")};
  color: ${color.gray_6};
`;

export const FileNameTextSpan = styled.span`
  color: ${color.helper_blue};
  text-decoration: underline;
`;

export const OrSpan = styled.span`
  font-size: 14px;
  color: ${color.gray_4};
  letter-spacing: -0.25px;
  margin-bottom: 10px;
`;

export const DropBoxButtonSpan = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 40px;
  border-radius: 4px;
  background-color: silver;
  cursor: pointer;
`;
