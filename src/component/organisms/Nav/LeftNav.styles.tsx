import { Link } from "react-router-dom";
import styled from "styled-components";
import * as color from "utils/styles/color";

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
  padding-right: 20px;
  box-shadow: 2px 0px 20px 0px rgba(118, 116, 165, 0.11);
  z-index: 999;
`;

export const LinkListContainerArticle = styled.article`
  width: 100%;
  margin-top: 52px;
`;

export const ButtonWrapperLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 0px 50px 50px 0px;
  height: 34px;
  padding-left: 30px;
  text-decoration: none;
  background-color: ${({ selected }) => (selected ? color.helper_blue2 : "none")};
  &:hover {
    background-color: ${color.helper_blue2};
  }
`;

export const TextSpan = styled.span`
  margin-left: 10px;
  font-size: 14px;
  color: ${({ isSelect }) => (isSelect ? color.helper_blue : color.gray_6)};
`;

export const LogOutArticle = styled.article`
  padding: 20px;
`;
