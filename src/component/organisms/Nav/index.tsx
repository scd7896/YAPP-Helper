import * as React from "react";
import classNames from "classnames/bind";
import styles from "./styles.scss";
import NavLink from "molecules/NavLink/NavLink";
import LogOutButton from "atomic/Button/LogOutButton";
import IconSelector from "molecules/IconSelector/IconSelector";
import useNavKeyString from "hooks/useNavKeyString";
const cx = classNames.bind(styles);
const LeftNav = () => {
  const { getIsSelected } = useNavKeyString();
  return (
    <nav className={cx("leftnav-wrapper-container")}>
      <article className={cx("leftnav-linklist-container")}>
        <div className={cx("button-wrapper")}>
          <NavLink to="/select" keyString="select">
            홈으로 가기
          </NavLink>
        </div>
        <div className={cx("button-wrapper")}>
          <IconSelector icon="folder" isSelect={getIsSelected("recruit")} />
          <NavLink to="/recruit" keyString="recruit">
            리쿠르트 오픈
          </NavLink>
        </div>
        <div className={cx("button-wrapper")}>
          <IconSelector icon="send" isSelect={getIsSelected("email")} />
          <NavLink to="/email/1" keyString="email">
            결과메일 발송
          </NavLink>
        </div>
        <div className={cx("button-wrapper")}>
          <IconSelector icon="pencil" isSelect={getIsSelected("mailform")} />
          <NavLink to="/mailform" keyString="mailform">
            메일양식 관리
          </NavLink>
        </div>
      </article>
      <article className={cx("logout-container")}>
        <LogOutButton />
      </article>
    </nav>
  );
};

export default LeftNav;
