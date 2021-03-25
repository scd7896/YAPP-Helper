import * as React from "react";
import LogOutButton from "atomic/Button/LogOutButton";
import IconSelector from "molecules/IconSelector/IconSelector";
import useNavKeyString from "hooks/useNavKeyString";
import { WrapperNav, LinkListContainerArticle, ButtonWrapperLink, LogOutArticle, TextSpan } from "./LeftNav.styles";

const LeftNav = () => {
  const { getIsSelected } = useNavKeyString();
  return (
    <WrapperNav>
      <LinkListContainerArticle>
        <ButtonWrapperLink to="/select" keyString="select">
          <TextSpan>홈으로 가기</TextSpan>
        </ButtonWrapperLink>
        <ButtonWrapperLink to="/recruit" isSelect={getIsSelected("recruit")}>
          <IconSelector icon="folder" isSelect={getIsSelected("recruit")} />
          <TextSpan isSelect={getIsSelected("recruit")}>리쿠르팅 오픈</TextSpan>
        </ButtonWrapperLink>
        <ButtonWrapperLink to="/email/1" keyString="email" isSelect={getIsSelected("email")}>
          <IconSelector icon="send" isSelect={getIsSelected("email")} />
          <TextSpan isSelect={getIsSelected("email")}>결과메일 발송</TextSpan>
        </ButtonWrapperLink>
        <ButtonWrapperLink to="/mailform" isSelect={getIsSelected("mailform")}>
          <IconSelector icon="pencil" isSelect={getIsSelected("mailform")} />
          <TextSpan isSelect={getIsSelected("mailform")}>메일양식 관리</TextSpan>
        </ButtonWrapperLink>
        <ButtonWrapperLink to="/users" isSelect={getIsSelected("users")}>
          <IconSelector icon="pencil" isSelect={getIsSelected("users")} />
          <TextSpan isSelect={getIsSelected("users")}>유저 정보 보기</TextSpan>
        </ButtonWrapperLink>
      </LinkListContainerArticle>
      <LogOutArticle>
        <LogOutButton />
      </LogOutArticle>
    </WrapperNav>
  );
};

export default LeftNav;
