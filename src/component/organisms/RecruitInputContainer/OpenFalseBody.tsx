import * as React from "react";
import RecruitGuide from "molecules/RecruitGuide";
import RecruitInput from "atomic/InputStyle/Recruit/Input";

import "./styles.scss";
const OpenFalseBody = () => {
  return (
    <section className="recruit-input-body">
      <RecruitGuide type="string" name="generation" title="활동기수" />
      <RecruitGuide type="string" name="startDay" title="모집예상월" />
    </section>
  );
};

export default OpenFalseBody;
