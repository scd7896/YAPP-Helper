import * as React from "react";
import RecruitingFont from "../../atomic/FontStyle/RecruitingFont";
import ToggleButton from "../../atomic/InputStyle/Recruit/ToggleButton";
import RecruitInput from "../../atomic/InputStyle/Recruit/Input";

import "./styles.scss";

const RecruitGuide = ({ title, type, name }: RecruitInputProp) => {
  let InputComponent: ({ name }: any) => JSX.Element;
  switch (type) {
    case "checked":
      InputComponent = ToggleButton;
      break;
    case "string":
      InputComponent = RecruitInput;
      break;
  }

  return (
    <div className="recruit-input-wrapper">
      <RecruitingFont>{title}</RecruitingFont>
      <InputComponent name={name} />
    </div>
  );
};

export default RecruitGuide;
