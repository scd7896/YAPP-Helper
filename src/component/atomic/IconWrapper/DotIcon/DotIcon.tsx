import * as React from "react";
import styled from "styled-components";
const Dot = styled.div`
  width: 18.5px;
  height: 1px;
  border-top: ${({ isFill }) => (isFill ? "1.5px dotted #3751ff" : "1.5px dotted #bcbbd6")};
`;
import { useRouteMatch } from "react-router-dom";

interface DotIconProp {
  gradeNumber: number;
}

const DotIcon = ({ gradeNumber }: DotIconProp) => {
  const { grade } = useRouteMatch<EmailParamsData>().params;
  return <Dot isFill={gradeNumber <= parseInt(grade, 10)}></Dot>;
};

export default DotIcon;
