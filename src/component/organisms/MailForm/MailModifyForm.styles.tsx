import styled from "styled-components";
export const TitleWrapperArticle = styled.article`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ModifyTitleSpan = styled.span`
  margin-right: 24px;
`;

export const ModifyPictureWrapperDiv = styled.div`
  position: relative;
  > img {
    width: 750px;
    height: 150px;
  }
`;

export const OnImageCoverDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 750px;
  height: 150px;
  background-color: rgba(37, 39, 44, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CoverTextSpan = styled.span`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.25px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 14px;
`;
