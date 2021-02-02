import * as React from "react";
import { useEffect } from "react";
import useHisotryRoute from "hooks/useHistoryRoute";
import NomalButton from "atomic/Button/NomalButton";
import Table from "organisms/Table";
import useDesire from "hooks/useDesire";
import { TableWrapperDiv, InnerGradeFooter } from "./EmailSecondGrade.styles";
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
