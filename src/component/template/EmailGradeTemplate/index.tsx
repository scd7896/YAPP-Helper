import * as React from "react";

import SelectLayout from "../SelectLayout";
import { HeadGrade } from "organisms";
import { StatusTitle } from "atomic";
import classNames from "classnames/bind";
import styles from "./styles.scss";
interface EmailGradeTemplateProp {
  children: React.ReactElement | React.ReactElement[];
}
const cx = classNames.bind(styles);
const EmailGradeTemplate = ({ children }: EmailGradeTemplateProp) => {
  /**
   * todo: match.params.grade 단계에 따라서 다른 컴포넌트를 그린다
   */

  return (
    <div>
      <SelectLayout>
        <header className={cx("header-wrapper-container")}>
          <section className={cx("header-contents-wrapper")}>
            <StatusTitle>결과메일 발송</StatusTitle>
            {/* <VerticalBar /> */}
            <HeadGrade
              gradeList={["엑셀파일업로드", "셀 헤더 설정", "셀 분류 확인", "메일내용확인", "실시간 발송확인"]}
            />
          </section>
        </header>
        <section className={cx("body-contents-wrapper")}>{children}</section>
      </SelectLayout>
    </div>
  );
};

export default EmailGradeTemplate;
