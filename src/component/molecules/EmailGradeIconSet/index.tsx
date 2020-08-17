import * as React from "react";
import GradeGuideIcon from "atomic/IconWrapper/GradeGuide";
import DotIcon from "atomic/IconWrapper/DotIcon";

import "./styles.scss";
interface EmailGradeIconSetProp {
  gradeNumber: number;
  text: string;
}

const EmailGradeIconSet = ({ gradeNumber, text }: EmailGradeIconSetProp) => {
  return (
    <div className="grade-icon-set-wrapper">
      <DotIcon gradeNumber={gradeNumber}></DotIcon>
      <GradeGuideIcon gradeNumber={gradeNumber} text={text}></GradeGuideIcon>
    </div>
  );
};

export default EmailGradeIconSet;
