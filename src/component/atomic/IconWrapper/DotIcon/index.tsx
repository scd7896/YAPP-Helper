import * as React from "react";
import { useRouteMatch } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./styles.scss";
interface DotIconProp {
  gradeNumber: number;
}
const cx = classNames.bind(styles);
const DotIcon = ({ gradeNumber }: DotIconProp) => {
  const { grade } = useRouteMatch<EmailParamsData>().params;
  return (
    <div
      className={cx("dot-icon-style", `${gradeNumber <= parseInt(grade, 10) ? "blue-border" : "gray-border"}`)}
    ></div>
  );
};

export default DotIcon;
