import * as React from "react";
import { useMemo, FC } from "react";
import ViewTd from "atomic/Table/ViewTd/ViewTd";
import styled from "styled-components";
import * as color from "utils/styles/color";

const Tr = styled.tr`
  height: 50px;
  background-color: ${({ status }) => status === "failure" && "rgba(255, 102, 103, 0.04)"};
  > td {
    border-bottom: 1px solid ${color.gray_3};
    padding-left: 24px;
    font-size: 14px;
    letter-spacing: -0.25px;
    color: ${color.gray_5};
  }

  > th {
    border-bottom: 1px solid ${color.gray_3};
  }
  & td:last-child {
    color: ${({ status }) => {
      if (status === "success") return color.success_green;
      if (status === "failure") return color.failure_red;
    }};
  }
`;

interface IProp {
  sendStatus: boolean | null;
  datas: Array<string>;
}

const StateRow: FC<IProp> = ({ sendStatus, datas }) => {
  const getSendStatus = useMemo(() => {
    if (sendStatus === false) return "success";
    if (sendStatus === true) return "failure";
    return "request";
  }, [sendStatus]);
  const getSendText = useMemo(() => {
    if (sendStatus === false) return "발송성공";
    if (sendStatus === true) return "발송실패";
    return "발송중";
  }, [sendStatus]);
  return (
    <Tr status={getSendStatus}>
      {[...datas, getSendText].map((text, index) => (
        <ViewTd key={text + index}>{text}</ViewTd>
      ))}
    </Tr>
  );
};

export default StateRow;
