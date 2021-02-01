import * as React from "react";
import classNames from "classnames/bind";
import GoogleLogin from "atomic/GoogleLogin";
import {IndexDiv} "./Index.styles"
import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

const Index = () => {
  return (
    <IndexDiv>
      <span className={cx("helperFontLogo")}>YAPP Helper</span>
      <span className={cx("googleLoginTitle")}>로그인하세요</span>
      <GoogleLogin />
    </IndexDiv>
  );
};

export default Index;
