import * as React from "react";
import { useEffect } from "react";
import RecruitTemplate from "template/RecruitTemplate/RecruitTemplate";
import RecruitInputContainer from "organisms/RecruitInputContainer/RecruitInputContainer";

// Hooks
import useRecruit from "hooks/recruit";

const Recruit = () => {
  const recruit = useRecruit();
  useEffect(() => {
    recruit.dataRequest();
  }, []);
  return (
    <div>
      <RecruitTemplate>
        <div>{recruit.isLoaded ? <RecruitInputContainer /> : "로딩 중 입니다."}</div>
      </RecruitTemplate>
    </div>
  );
};

export default Recruit;
