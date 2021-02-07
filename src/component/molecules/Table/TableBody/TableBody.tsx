import * as React from "react";
import { FC } from "react";
import TableRow from "../TableRow/TableRow";
import styled from "styled-components";

const Tbody = styled.tbody`
  display: block;
  height: 410px;
  overflow-y: scroll;
`;

interface IProp {
  rows: string[][];
}
const TableBody: FC<IProp> = ({ rows }) => {
  return (
    <Tbody>
      {rows.map((row, index) => {
        return <TableRow key={`table-body-rows-${index}`} isHead={false} items={row} />;
      })}
    </Tbody>
  );
};

export default TableBody;
