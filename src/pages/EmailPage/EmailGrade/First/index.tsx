import * as React from "react";
import classNames from "classnames/bind";
import FileInput from "atomic/File/Input";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import NomalButton from "atomic/Button/NomalButton";
import useHisotryRoute from "hooks/useHistoryRoute";
import EmailGradeTitle from "atomic/FontStyle/EmailGradeTitle";

import styles from "./styles.scss";
const cx = classNames.bind(styles);

const EmailGradeFirst = () => {
  const { type } = useParams() as { type: string };
  const { pushHistory } = useHisotryRoute();

  const { users, filename } = useSelector<RootStore, RootStore["desire"]>((state) => state.desire);

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
            pushHistory(`/email/${type}/2`);
          }}
        >
          다음
        </NomalButton>
      </footer>
    </div>
  );
};

export default EmailGradeFirst;
