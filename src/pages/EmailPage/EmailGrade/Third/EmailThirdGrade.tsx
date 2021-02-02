import * as React from "react";
import { useEffect, useState, useCallback, useMemo } from "react";
import Filter from "atomic/InputStyle/Filter";
import NomalButton from "atomic/Button/NomalButton";
import useHisotryRoute from "hooks/useHistoryRoute";
import Table from "organisms/Table";
import EmailGradeTitle from "atomic/FontStyle/EmailGradeTitle";
import useDesire from "hooks/useDesire";
import { WrapperDiv, FilterWrapperDiv, InnerGradeFooter } from "./EmailThirdGrade.styles";

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
      <EmailGradeTitle>3. 셀 분류확인</EmailGradeTitle>
      <span>분류 완료! 명단을 확인하세요 👀</span>
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
