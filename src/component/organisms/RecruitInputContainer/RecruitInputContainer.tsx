import * as React from "react";
import { useCallback, useEffect, useState } from "react";
import RecruitGuide from "molecules/RecruitGuide/RecruitGuide";
import { putRecruitData } from "utils/api";
import { useHistory } from "react-router-dom";
import NomalButton from "atomic/Button/NomalButton";
import OpenTrueBody from "./OpenTrueBody";
import OpenFalseBody from "./OpenFalseBody";
import { RecruitForm, RecruitHeader, RecruitFooter } from "./RecruitInputContainer.styles";

// Hooks
import useRecruit from "hooks/recruit";

const RecruitInputContainer = () => {
  const recruit = useRecruit();
  const history = useHistory();
  const [isUpdateSuccess, setIsUpdateSuccess] = useState(false);
  const recruitDataUpdate = useCallback(async () => {
    try {
      await putRecruitData({
        generation: parseInt(recruit.generation.toString(), 10),
        url: recruit.URL,
        isRecruit: recruit.isRecruiting,
        startDay: recruit.startDay,
        lastDay: recruit.lastDay,
      });
      setIsUpdateSuccess(true);
    } catch (err) {
      setIsUpdateSuccess(false);
    }
  }, [recruit.isRecruiting, recruit.generation, recruit.URL, recruit.startDay, recruit.lastDay]);

  useEffect(() => {
    if (isUpdateSuccess) {
      alert("성공적으로 반영하였습니다.");
      history.push("/select");
    }
  }, [isUpdateSuccess]);
  const submitHandler = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }, []);
  return (
    <RecruitForm action={`/api/recruit`} method="post" onSubmit={submitHandler}>
      <input type="hidden" name="_method" value="put" />
      <RecruitHeader>
        <RecruitGuide type="checked" name="isRecruiting" title="리쿠르팅 오픈하기" />
      </RecruitHeader>
      {recruit.isRecruiting ? <OpenTrueBody /> : <OpenFalseBody />}
      <RecruitFooter>
        <NomalButton color="ghost" size="small">
          취소
        </NomalButton>
        <NomalButton color="default" size="small" onClick={recruitDataUpdate}>
          완료
        </NomalButton>
      </RecruitFooter>
    </RecruitForm>
  );
};

export default RecruitInputContainer;
