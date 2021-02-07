import * as React from "react";
import SelectLinkBox from "molecules/SelectLinkBox/SelectLinkBox";
import { SmallSubTitle, BigSubTitle } from "atomic";
import classNames from "classnames/bind";
import styles from "./styles.scss";
const cx = classNames.bind(styles);
const SelectMailTemplate = () => {
  return (
    <section className={cx("email-section-wrapper")}>
      <div className={cx("content-width-resize-wrapper")}>
        <section className={cx("email-head-container")}>
          <SmallSubTitle>발표전형선택</SmallSubTitle>
          <BigSubTitle>발표할 결과를 선택하세요 🤔</BigSubTitle>
        </section>
        <section className={cx("email-select-container")}>
          <SelectLinkBox to="/email/document/1" title="서류전형 결과안내"></SelectLinkBox>
          <SelectLinkBox to="/email/meeting/1" title="면접전형 결과안내"></SelectLinkBox>
        </section>
      </div>
    </section>
  );
};

export default SelectMailTemplate;
