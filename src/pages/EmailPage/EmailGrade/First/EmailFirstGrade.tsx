import * as React from "react";
import { FileButton, FileInput, NomalButton } from "atomic";
import useHisotryRoute from "hooks/useHistoryRoute";
import useDesire from "hooks/useDesire";
import { EmailGradeSubTitleSpan, EmailGradeTitleSpan } from "@font";
import {
  InnerGradeBodySizeSection,
  InnerGradeFooter,
  WrapperHeader,
  TitleWrapperDiv,
  DescriptionWrapperDiv,
} from "./EmailFirstGrade.styles";

const EmailFirstGrade = () => {
  const { pushHistory } = useHisotryRoute();
  const {
    desireState: { users, filename },
  } = useDesire();

  const excelFormDownload = React.useCallback(() => {
    const link = document.createElement("a");
    link.href = "/static/recruit_form_sheet.xlsx";
    link.target = "_blank";
    link.download = "엑셀양식.xlsx";
    link.click();
    link.remove();
  }, []);

  return (
    <div>
      <WrapperHeader>
        <TitleWrapperDiv>
          <EmailGradeTitleSpan>1.엑셀파일 업로드</EmailGradeTitleSpan>
        </TitleWrapperDiv>
        <DescriptionWrapperDiv>
          <EmailGradeSubTitleSpan>📂엑셀파일을 업로드 해주세요</EmailGradeSubTitleSpan>

          <FileButton onClick={excelFormDownload}>엑셀양식 다운로드</FileButton>
        </DescriptionWrapperDiv>
      </WrapperHeader>
      <InnerGradeBodySizeSection>
        <FileInput fileName={filename} />
      </InnerGradeBodySizeSection>
      <InnerGradeFooter>
        <NomalButton
          size="default"
          color="default"
          disabled={users.length === 0}
          onClick={() => {
            pushHistory("/email/2");
          }}
        >
          다음
        </NomalButton>
      </InnerGradeFooter>
    </div>
  );
};

export default EmailFirstGrade;
