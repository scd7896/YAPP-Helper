import * as React from "react";
import { useMemo, FC } from "react";
import ClickHeadTh from "atomic/Table/ClickHeadTh/ClickHeadTh";
import ViewTd from "atomic/Table/ViewTd/ViewTd";
import styled from "styled-components";
import * as color from "utils/styles/color";
const Tr = styled.tr`
  height: 50px;
  > td {
    border-bottom: 1px solid ${color.gray_3};
    padding-left: 24px;
    font-size: 14px;
    color: ${color.gray_5};
    letter-spacing: -0.25px;
  }

  > th {
    border-bottom: 1px solid ${color.gray_3};
  }
`;

interface IProp extends IIsHaed {
  items: Array<string>;
  isHead: boolean;
}
interface IIsHaed {
  isHead: boolean;
}
const DrawTableData: FCCheckFunction<IIsHaed> = ({ isHead }) => (isHead ? ClickHeadTh : ViewTd);
const TableRow: FC<IProp> = ({ items, isHead }) => {
  const DrawTableMemo = useMemo(() => {
    return DrawTableData({ isHead });
  }, [isHead]);
  return (
    <Tr>
      {items.map((item, index) => (
        <DrawTableMemo index={isHead ? index : undefined}>{item}</DrawTableMemo>
      ))}
    </Tr>
  );
};

export default TableRow;
