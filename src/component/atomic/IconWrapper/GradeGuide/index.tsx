import * as React from "react";
import { useMemo } from "react";
import { useRouteMatch } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./styles.scss";
interface GradeGuideIconProp {
  gradeNumber: number;
  text: string;
}

const cx = classNames.bind(styles);
const GradeGuideIcon = ({ gradeNumber, text }: GradeGuideIconProp) => {
  const { grade } = useRouteMatch<EmailParamsData>().params;
  const isNowGrade = useMemo<boolean>(() => {
    return parseInt(grade, 10) === gradeNumber;
    return true;
  }, [grade]);
  const isAccepted = useMemo<boolean>(() => {
    return parseInt(grade, 10) > gradeNumber;
  }, [grade]);
  return (
    <div className={cx("grade-icon-wrapper")}>
      <div className={cx("grade-num-icon", `${isAccepted ? "blue-backgrond" : "gray-backgrond"}`)}>
        {gradeNumber + 1}
      </div>
      <p
        className={cx(
          "grade-icon-text",
          ` ${isAccepted ? (isNowGrade ? "color-blue-bold-style" : "color-blue-regular-style") : "color-gray-style"}`
        )}
      >
        {text}
      </p>
    </div>
  );
};

export default GradeGuideIcon;
