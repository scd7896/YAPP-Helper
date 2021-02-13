import * as React from "react";
import styled from "styled-components";
const WrapperDiv = styled.div`
  display: flex;
  align-items: center;
`;
import { GradeGuideIcon, ArrowIcon } from "atomic";
interface EmailGradeIconSetProp {
  gradeNumber: number;
  text: string;
}

const EmailGradeIconSet = ({ gradeNumber, text }: EmailGradeIconSetProp) => {
  return (
    <WrapperDiv>
      <ArrowIcon gradeNumber={gradeNumber}></ArrowIcon>
      <GradeGuideIcon gradeNumber={gradeNumber} text={text}></GradeGuideIcon>
    </WrapperDiv>
  );
};

export default EmailGradeIconSet;
