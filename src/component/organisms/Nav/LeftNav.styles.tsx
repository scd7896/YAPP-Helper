import styled from "styled-components";

export const WrapperNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 205px;
  position: sticky;
  top: 0;
  left: 0;
  height: 100vh;
  background-color: #ffffff;
  box-shadow: 2px 0px 20px 0px rgba(118, 116, 165, 0.11);
  z-index: 999;
`;

export const LinkListContainerArticle = styled.article`
  width: 100%;
  margin-top: 52px;
`;

export const ButtonWrapperDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 0px 50px 50px 0px;
  height: 34px;
  padding-left: 30px;
  &:hover {
    background-color: #f5f7ff;
  }
`;

export const LogOutArticle = styled.article`
  padding: 20px;
`;
