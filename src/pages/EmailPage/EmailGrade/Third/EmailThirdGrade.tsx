import * as React from "react";
import { useEffect, useState, useCallback, useMemo } from "react";
import useHisotryRoute from "hooks/useHistoryRoute";
import Filter from "atomic/InputStyle/Filter/Filter";
import NomalButton from "atomic/Button/NomalButton";
import Table from "organisms/Table/Table";
import useDesire from "hooks/useDesire";

import { WrapperDiv, FilterWrapperDiv, InnerGradeFooter } from "./EmailThirdGrade.styles";
import { EmailGradeSubTitleSpan, EmailGradeTitleSpan } from "@font";

type FilterString = "all" | "pass" | "fail";

const EmailThirdGrade = () => {
  const { pushHistory } = useHisotryRoute();
  const [filterStr, setFilterStr] = useState<FilterString>("all");
  const {
    desireState: { allList },
    setUserData,
  } = useDesire();

  const userList = useMemo(() => {
    return allList
      .filter((user) => {
        if (filterStr === "all") {
          return true;
        }
        if (filterStr === "pass") {
          return user.isPass;
        }
        if (filterStr === "fail") {
          return !user.isPass;
        }
      })
      .map((user) => {
        return [user.name, user.email, user.isPass.toString(), user.meetingTime ? user.meetingTime : ""];
      });
  }, [allList, filterStr]);

  const filterClick = useCallback((target) => {
    setFilterStr(target as FilterString);
  }, []);

  useEffect(() => {
    setUserData();
  }, [setUserData]);

  const headItems = ["name", "email", "isPass", "meetingTime"];
  return (
    <WrapperDiv>
      <EmailGradeTitleSpan>3. 셀 분류확인</EmailGradeTitleSpan>
      <EmailGradeSubTitleSpan>분류 완료! 명단을 확인하세요 👀</EmailGradeSubTitleSpan>
      <FilterWrapperDiv>
        <Filter onClick={filterClick} value="all" filterValue={filterStr}>
          전체
        </Filter>
        <Filter onClick={filterClick} value="pass" filterValue={filterStr}>
          합격
        </Filter>
        <Filter onClick={filterClick} value="fail" filterValue={filterStr}>
          불합격
        </Filter>
      </FilterWrapperDiv>

      {allList[0] && <Table bodyItems={[headItems, ...userList]} />}

      <InnerGradeFooter>
        <NomalButton
          color="lightBlue"
          size="default"
          onClick={() => {
            pushHistory(`/email/2`);
          }}
        >
          이전
        </NomalButton>
        <NomalButton
          color="default"
          size="default"
          onClick={() => {
            pushHistory(`/email/4`);
          }}
        >
          다음
        </NomalButton>
      </InnerGradeFooter>
    </WrapperDiv>
  );
};

export default EmailThirdGrade;
