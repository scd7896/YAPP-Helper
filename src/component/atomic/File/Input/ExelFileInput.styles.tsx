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
  background-color: ${({ isUploaded, isOver }) => {
    if (isOver) {
      return "rgba(228, 230, 240, 0.5)";
    }
    if (isUploaded) {
      return "#f8faff";
    }
    return color.gray_1;
  }};
`;

export const IconMarginDiv = styled.div`
  margin-bottom: 8px;
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
  background-color: #ffffff;
  border: solid 1px #e3e3e3;
  color: ${color.gray_5};
  font-size: 14px;
  cursor: pointer;
`;
