import * as React from "react";
import FileInput from "../../../atomic/File/Input";

import "./styles.scss";
import InnerHeadStyle from "../../../atomic/FontStyle/InnerHeadStyle";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import NomalButton from "../../../atomic/Button/NomalButton";
import useHisotryRoute from "../../../../hooks/useHistoryRoute";

const EmailGradeFirst = () => {
  const { type } = useParams() as { type: string };
  const { pushHistory } = useHisotryRoute();

  const { users } = useSelector<RootStore, RootStore["desire"]>((state) => state.desire);

  return (
    <div>
      <header className="inner-grade-title-wrapper">
        <InnerHeadStyle>엑셀파일 업로드</InnerHeadStyle>
      </header>
      <section className="inner-grade-bodysize-wrapper">
        <FileInput />
      </section>
      <footer className="inner-grade-footer">
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
