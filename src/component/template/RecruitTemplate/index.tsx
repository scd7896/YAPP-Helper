import * as React from "react";
import SelectLayout from "../SelectLayout";
import classNames from "classnames/bind";
import PageHeader from "atomic/PageHeader/PageHeader";

import styles from "./styles.scss";
const cx = classNames.bind(styles);

interface RecruitTemplateProp {
  children: React.ReactElement;
}

const RecruitTemplate = ({ children }: RecruitTemplateProp) => {
  return (
    <SelectLayout>
      <section className={cx("recruit-tamplate-wrapper")}>
        <PageHeader>리쿠르팅 오픈</PageHeader>
        <section className={cx("recruit-template-body")}>{children}</section>
      </section>
    </SelectLayout>
  );
};

export default RecruitTemplate;
