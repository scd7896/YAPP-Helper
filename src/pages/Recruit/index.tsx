import * as React from "react";
import { useEffect } from "react";
import RecruitTemplate from "../../component/template/RecruitTemplate";
import RecruitInputContainer from "../../component/organisms/RecruitInputContainer";

// Hooks
import useRecruit from "../../hooks/recruit";

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
