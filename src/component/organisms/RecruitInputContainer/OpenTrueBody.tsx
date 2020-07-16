import * as React from "react";
import RecruitGuide from "../../molecules/RecruitGuide";
import RecruitingFont from "../../atomic/FontStyle/RecruitingFont";

import TextInput from "../../atomic/TextInput";

import "./styles.scss";
const OpenTrueBody = () => {
  return (
    <section className="recruit-input-body">
      <RecruitGuide type="string" name="generation" title="지원기수" />
      <div className="recruit-date-wrapper">
        <RecruitingFont>모집기간</RecruitingFont>
        <div className="recruit-date-input-wrapper">
          <TextInput placeholder="0000.00.00" width="100px" />
          <TextInput placeholder="0000.00.00" width="100px" />
        </div>
      </div>
      <RecruitGuide type="string" name="URL" title="지원링크" />
    </section>
  );
};

export default OpenTrueBody;
