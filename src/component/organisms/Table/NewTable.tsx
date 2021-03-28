import { ObjectTableRow } from "@molecules";
import TableHead from "molecules/Table/TableHead/TableHead";
import * as React from "react";
import { StyleTable } from "./Table.styles";

interface HeaderItem {
  dataIndex: string;
  title: string;
}

interface IProp {
  column: Array<HeaderItem>;
  dataSource: Array<Object>;
  onRowClick?: (arg: Object) => void;
  selectOption?: boolean;
}

export default function NewTable({ column, dataSource, onRowClick, selectOption }: IProp) {
  const headerTitles = column.map((value) => value.title);
  const headerDataIndexs = column.map((value) => value.dataIndex);
  const bodyItems = dataSource.map((value) => {
    const bodyItem = {};
    headerDataIndexs.map((dataIndex) => {
      bodyItem[dataIndex] = value[dataIndex];
    });
    return bodyItem;
  });

  return (
    <StyleTable>
      <TableHead items={headerTitles} selectOption={selectOption} />
      <tbody>
        {bodyItems.map((item) => (
          <ObjectTableRow key={JSON.stringify(item)} item={item} onRowClick={onRowClick} />
        ))}
      </tbody>
    </StyleTable>
  );
}
