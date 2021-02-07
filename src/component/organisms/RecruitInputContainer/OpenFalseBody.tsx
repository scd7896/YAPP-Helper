import * as React from "react";
import RecruitGuide from "molecules/RecruitGuide/RecruitGuide";

import { RecruitInputBodySection } from "./RecruitInputContainer.styles";

const OpenFalseBody = () => {
  return (
    <RecruitInputBodySection>
      <RecruitGuide type="string" name="generation" title="활동기수" />
      <RecruitGuide type="string" name="startDay" title="모집예상월" />
    </RecruitInputBodySection>
  );
};

export default OpenFalseBody;
