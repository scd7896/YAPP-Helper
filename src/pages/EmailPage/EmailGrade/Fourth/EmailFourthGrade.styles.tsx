import styled from "styled-components";
import * as color from "utils/styles/color";
export const ContentWrapperSection = styled.section`
  width: 846px;
  background-color: #f5f6fa;
  box-shadow: 2px 2px 6px 0 rgba(0, 0, 0, 0.04);
  header {
    display: flex;
  }
  article {
    border-bottom: 1px solid #aaaaaa;
    padding: 22px 61px 22px 32px;
  }
  .head-nav-button {
    display: flex;
    align-items: center;
    padding: 0px 30px 0px 30px;
    height: 54px;
    color: ${color.gray_4};
  }
  .selected {
    background-color: #ffffff;
    color: ${color.gray_6};
  }
`;

export const HeadNavSpan = styled.span`
  display: flex;
  align-items: center;
  padding: 0px 30px 0px 30px;
  height: 54px;
  color: ${({ selected }) => (selected ? color.gray_6 : color.gray_4)};
  ${({ selected }) => selected && `background-color: #ffffff;`}
`;

export const BodySection = styled.body`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
`;

export const InnerGradeFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 29px 0px 54px 0px;
`;
