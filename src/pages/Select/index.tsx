import * as React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./styles.scss";

import SelectLinkBox from "../../component/molecules/SelectLinkBox";
import BigSubTitle from "../../component/atomic/FontStyle/Subtitle/Big";
import SmallSubTitle from "../../component/atomic/FontStyle/Subtitle/Small";
const cx = classNames.bind(styles);

const SelectPage = () => {
  return (
    <main className={cx("main-wrapper")}>
      <section className={cx("content-wrapper")}>
        <header className={cx("head-title-logo")}>YAPP Helper</header>
        <section className={cx("page-title")}>
          <SmallSubTitle>Helper 일시키기</SmallSubTitle>
          <BigSubTitle>필요한 기능을 선택하세요 🙌</BigSubTitle>
        </section>
        <section className={cx("link-box-wrapper")}>
          <SelectLinkBox to="/recruit" title="리쿠르팅 오픈"></SelectLinkBox>
          <SelectLinkBox to="/email" title="전형 결과 메일 발송"></SelectLinkBox>
          <SelectLinkBox to="/mailform" title="메일 양식 관리"></SelectLinkBox>
        </section>
      </section>
    </main>
  );
};

export default SelectPage;
