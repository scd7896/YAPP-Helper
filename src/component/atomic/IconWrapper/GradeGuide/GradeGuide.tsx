import * as React from "react";
import { useMemo } from "react";
import { useRouteMatch } from "react-router-dom";
import { GradeIconTextP, GradeIconWrapperDiv, GradeNumIcon } from "./GradeGuide.styles";

interface GradeGuideIconProp {
  gradeNumber: number;
  text: string;
}

const GradeGuideIcon = ({ gradeNumber, text }: GradeGuideIconProp) => {
  const { grade } = useRouteMatch<EmailParamsData>().params;
  const isAccepted = useMemo<boolean>(() => {
    return parseInt(grade, 10) > gradeNumber;
  }, [grade]);
  return (
    <GradeIconWrapperDiv>
      <GradeNumIcon isAccepted={isAccepted}>{gradeNumber + 1}</GradeNumIcon>
      <GradeIconTextP isAccepted={isAccepted}>{text}</GradeIconTextP>
    </GradeIconWrapperDiv>
  );
};

export default GradeGuideIcon;
