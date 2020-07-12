import * as React from "react";
import { FC } from "react";
import TableRow from "../TableRow";
interface IProp {
  items: Array<string>;
}
const TableHead: FC<IProp> = ({ items }) => (
  <thead>
    <TableRow items={items} isHead={true} />
  </thead>
);

export default TableHead;
