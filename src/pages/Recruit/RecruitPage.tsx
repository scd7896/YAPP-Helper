import * as React from "react";
import { useEffect } from "react";
import RecruitTemplate from "template/RecruitTemplate/RecruitTemplate";
import RecruitInputContainer from "organisms/RecruitInputContainer/RecruitInputContainer";

// Hooks
import useRecruit from "hooks/recruit";

import { WrapperDiv } from "./RecruitPage.styles";

const RecruitPage = () => {
  const recruit = useRecruit();
  useEffect(() => {
    recruit.dataRequest();
  }, []);
  return (
    <div>
      <RecruitTemplate>
        <WrapperDiv>{recruit.isLoaded ? <RecruitInputContainer /> : "로딩 중 입니다."}</WrapperDiv>
      </RecruitTemplate>
    </div>
  );
};

export default RecruitPage;
