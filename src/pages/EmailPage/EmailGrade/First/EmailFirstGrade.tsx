import * as React from "react";
import { FileInput, NomalButton, EmailGradeTitle } from "atomic";
import useHisotryRoute from "hooks/useHistoryRoute";
import useDesire from "hooks/useDesire";
import { InnerGradeBodySizeSection, InnerGradeFooter } from "./EmailFirstGrade.styles";

const EmailFirstGrade = () => {
  const { pushHistory } = useHisotryRoute();
  const {
    desireState: { users, filename },
  } = useDesire();

  return (
    <div className={""}>
      <EmailGradeTitle>1.엑셀파일 업로드</EmailGradeTitle>
      <span>📂엑셀파일을 업로드 해주세요</span>
      <InnerGradeBodySizeSection>
        <FileInput fileName={filename} />
      </InnerGradeBodySizeSection>
      <InnerGradeFooter>
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
      </InnerGradeFooter>
    </div>
  );
};

export default EmailFirstGrade;
