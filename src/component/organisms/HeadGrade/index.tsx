import * as React from "react";
import GradeGuideIcon from "../../atomic/IconWrapper/GradeGuide";
import EmailGradeIconSet from "../../molecules/EmailGradeIconSet";

interface HeadGradeProp {
  gradeList: Array<string>;
}
const HeadGrade = ({ gradeList }: HeadGradeProp) => {
  return (
    <div style={{ display: "flex" }}>
      {gradeList.map((grade, index) => {
        if (index === 0) {
          return <GradeGuideIcon key={grade + index} gradeNumber={index} text={grade}></GradeGuideIcon>;
        } else {
          return <EmailGradeIconSet key={grade + index} gradeNumber={index} text={grade} />;
        }
      })}
    </div>
  );
};

export default HeadGrade;
