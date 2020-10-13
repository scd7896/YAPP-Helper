import * as React from "react";
import RecruitGuide from "molecules/RecruitGuide";
import classNames from "classnames/bind";
import styles from "./styles.scss";
const cx = classNames.bind(styles);
const OpenFalseBody = () => {
  return (
    <section className={cx("recruit-input-body")}>
      <RecruitGuide type="string" name="generation" title="활동기수" />
      <RecruitGuide type="string" name="startDay" title="모집예상월" />
    </section>
  );
};

export default OpenFalseBody;
