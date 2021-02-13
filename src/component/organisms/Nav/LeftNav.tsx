import * as React from "react";
import NavLink from "molecules/NavLink/NavLink";
import LogOutButton from "atomic/Button/LogOutButton";
import IconSelector from "molecules/IconSelector/IconSelector";
import useNavKeyString from "hooks/useNavKeyString";
import { WrapperNav, LinkListContainerArticle, ButtonWrapperDiv, LogOutArticle } from "./LeftNav.styles";

const LeftNav = () => {
  const { getIsSelected } = useNavKeyString();
  return (
    <WrapperNav>
      <LinkListContainerArticle>
        <ButtonWrapperDiv>
          <NavLink to="/select" keyString="select">
            홈으로 가기
          </NavLink>
        </ButtonWrapperDiv>
        <ButtonWrapperDiv>
          <IconSelector icon="folder" isSelect={getIsSelected("recruit")} />
          <NavLink to="/recruit" keyString="recruit">
            리쿠르트 오픈
          </NavLink>
        </ButtonWrapperDiv>
        <ButtonWrapperDiv>
          <IconSelector icon="send" isSelect={getIsSelected("email")} />
          <NavLink to="/email/1" keyString="email">
            결과메일 발송
          </NavLink>
        </ButtonWrapperDiv>
        <ButtonWrapperDiv>
          <IconSelector icon="pencil" isSelect={getIsSelected("mailform")} />
          <NavLink to="/mailform" keyString="mailform">
            메일양식 관리
          </NavLink>
        </ButtonWrapperDiv>
      </LinkListContainerArticle>
      <LogOutArticle>
        <LogOutButton />
      </LogOutArticle>
    </WrapperNav>
  );
};

export default LeftNav;
