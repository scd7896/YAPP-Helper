import * as React from "react";
import { FC } from "react";

import TableHead from "molecules/Table/TableHead/TableHead";
import TableBody from "molecules/Table/TableBody/TableBody";

import { StyleTable } from "./Table.styles";
interface IProp {
  headItems?: string[];
  bodyItems: string[][];
}
const Table: FC<IProp> = ({ headItems, bodyItems }) => {
  return (
    <StyleTable>
      {headItems && <TableHead items={headItems} />}
      <TableBody rows={bodyItems} />
    </StyleTable>
  );
};

export default Table;
