import * as React from "react";
import { FC } from "react";
import TableRow from "../TableRow/TableRow";
interface IProp {
  items: Array<string>;
  selectOption?: boolean;
}
const TableHead: FC<IProp> = ({ items, selectOption = true }) => (
  <thead>
    <TableRow items={items} isHead={selectOption} />
  </thead>
);

export default TableHead;
