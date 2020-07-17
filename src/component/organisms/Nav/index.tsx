import * as React from "react";
import "./styles.scss";
import NavLink from "../../molecules/NavLink";
import LogOutButton from "../../atomic/Button/LogOutButton";

const LeftNav = () => {
  return (
    <nav className="leftnav-wrapper-container">
      <article className="leftnav-linklist-container">
        <div>
          <NavLink to="/select" keyString="select">
            홈으로 가기
          </NavLink>
        </div>
        <div>
          <NavLink to="/recruit" keyString="recruit">
            리쿠르트 오픈
          </NavLink>
        </div>
        <div>
          <NavLink to="/email" keyString="email">
            결과메일 발송
          </NavLink>
        </div>
        <div>
          <NavLink to="/mailform" keyString="emailedit">
            메일양식 관리
          </NavLink>
        </div>
      </article>
      <article>
        <LogOutButton />
      </article>
    </nav>
  );
};

export default LeftNav;
