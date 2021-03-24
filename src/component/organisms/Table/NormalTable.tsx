import * as React from "react";
import TableBody from "molecules/Table/TableBody/TableBody";
import TableHead from "molecules/Table/TableHead/TableHead";

import { StyleTable } from "./Table.styles";
interface IProp {
  items: Array<object>;
}
export default function NormalTable({ items }: IProp) {
  return (
    <StyleTable>
      <TableHead items={Object.keys(items[0])} selectOption={false} />
      <TableBody rows={items.map((item) => Object.values(item))} />
    </StyleTable>
  );
}
