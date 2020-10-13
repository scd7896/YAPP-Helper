import * as React from "react";
import { GradeGuideIcon, DotIcon } from "atomic";

import classNames from "classnames/bind";
import styles from "./styles.scss";
interface EmailGradeIconSetProp {
  gradeNumber: number;
  text: string;
}
const cx = classNames.bind(styles);
const EmailGradeIconSet = ({ gradeNumber, text }: EmailGradeIconSetProp) => {
  return (
    <div className={cx("grade-icon-set-wrapper")}>
      <DotIcon gradeNumber={gradeNumber}></DotIcon>
      <GradeGuideIcon gradeNumber={gradeNumber} text={text}></GradeGuideIcon>
    </div>
  );
};

export default EmailGradeIconSet;
