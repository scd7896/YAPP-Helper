import * as React from "react";
import { useEffect } from "react";
import useHisotryRoute from "hooks/useHistoryRoute";
import { EmailGradeTitleSpan, NomalButton, EmailGradeSubTitleSpan } from "atomic";
import { Table } from "organisms";
import useDesire from "hooks/useDesire";
import { TableWrapperDiv, InnerGradeFooter, TitleHeaderWrapper } from "./EmailSecondGrade.styles";
const EmailSecondGrade = () => {
  const { pushHistory } = useHisotryRoute();
  const {
    desireState: { keys, users },
    setUserData,
  } = useDesire();

  useEffect(() => {
    setUserData();
  }, [setUserData]);

  return (
    <TableWrapperDiv>
      <TitleHeaderWrapper>
        <EmailGradeTitleSpan style={{ marginBottom: "14px" }}>2.셀헤더 설정</EmailGradeTitleSpan>
        <EmailGradeSubTitleSpan> 👇 셀헤더를 클릭하여 각 셀의 역할을 정해주세요</EmailGradeSubTitleSpan>
      </TitleHeaderWrapper>
      <Table headItems={keys} bodyItems={users} />
      <InnerGradeFooter>
        <NomalButton
          color="lightBlue"
          size="default"
          onClick={() => {
            pushHistory(`/email/1`);
          }}
        >
          이전
        </NomalButton>
        <NomalButton
          color="default"
          size="default"
          onClick={() => {
            pushHistory(`/email/3`);
          }}
        >
          다음
        </NomalButton>
      </InnerGradeFooter>
    </TableWrapperDiv>
  );
};
export default EmailSecondGrade;
