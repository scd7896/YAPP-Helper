import * as React from "react";
import styled from "styled-components";
import { useRouteMatch } from "react-router-dom";

const IconImg = ({ isFill }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12">
    <g fill="none" fillRule="evenodd">
      <g stroke={isFill ? "#9FB3FF" : "#d0d2d2"}>
        <g>
          <path d="M743 26L749 32 743 38" transform="translate(-742 -25) translate(0 -1)" />
        </g>
      </g>
    </g>
  </svg>
);

const ArrowWrapper = styled.div`
  font-size: 12px;
`;

interface IProp {
  gradeNumber: number;
}

const ArrowIcon = ({ gradeNumber }: IProp) => {
  const { grade } = useRouteMatch<EmailParamsData>().params;
  return (
    <ArrowWrapper isFill={gradeNumber <= parseInt(grade, 10)}>
      <IconImg isFill={gradeNumber <= parseInt(grade, 10)} />{" "}
    </ArrowWrapper>
  );
};

export default ArrowIcon;
