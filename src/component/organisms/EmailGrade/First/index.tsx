import * as React from "react";
import FileInput from "../../../atomic/File/Input";

import "./styles.scss";
import InnerHeadStyle from "../../../atomic/FontStyle/InnerHeadStyle";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const EmailGradeFirst = () => {
  const { type } = useParams() as { type: string };
  const excelFormState = useSelector<RootStore>((state) => state.excelKeySetForm) as excelKeySetFormState;
  return (
    <div>
      <header className="inner-grade-title-wrapper">
        <InnerHeadStyle>엑셀파일 업로드</InnerHeadStyle>
      </header>
      <section className="inner-grade-bodysize-wrapper">
        <FileInput />
      </section>
      <footer className="inner-grade-footer">
        <Link to="/email">이전</Link>
        <Link to={`/email/${type}/2`}>다음</Link>
      </footer>
    </div>
  );
};

export default EmailGradeFirst;
