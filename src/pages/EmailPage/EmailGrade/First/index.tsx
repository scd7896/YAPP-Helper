import * as React from "react";
import classNames from "classnames/bind";
import FileInput from "atomic/File/Input";
import NomalButton from "atomic/Button/NomalButton";
import useHisotryRoute from "hooks/useHistoryRoute";
import EmailGradeTitle from "atomic/FontStyle/EmailGradeTitle";

import styles from "./styles.scss";
import useDesire from "hooks/useDesire";
const cx = classNames.bind(styles);

const EmailGradeFirst = () => {
  const { pushHistory } = useHisotryRoute();
  const {
    desireState: { users, filename },
  } = useDesire();

  return (
    <div className={""}>
      <EmailGradeTitle>1.엑셀파일 업로드</EmailGradeTitle>
      <span>📂엑셀파일을 업로드 해주세요</span>
      <section className={cx("inner-grade-bodysize-wrapper")}>
        <FileInput fileName={filename} />
      </section>
      <footer className={cx("inner-grade-footer")}>
        <NomalButton
          size="default"
          color="lightBlue"
          onClick={() => {
            pushHistory("/email");
          }}
        >
          이전
        </NomalButton>
        <NomalButton
          size="default"
          color="default"
          disabled={users.length === 0}
          onClick={() => {
            pushHistory(`/email/2`);
          }}
        >
          다음
        </NomalButton>
      </footer>
    </div>
  );
};

export default EmailGradeFirst;
