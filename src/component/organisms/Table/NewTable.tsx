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

  const tableClickListener = React.useCallback((event) => {
    let parent = event.target.parentNode;

    let id;
    while (parent) {
      if (parent.dataset.index !== undefined) {
        id = parent.dataset.index;
        break;
      }
      parent = parent.parentNode;
    }
    if (parent === null) return;
    if (onRowClick) {
      onRowClick(dataSource[Number(id)]);
    }
  }, []);

  return (
    <StyleTable onClick={tableClickListener}>
      <TableHead items={headerTitles} selectOption={selectOption} />
      <tbody>
        {bodyItems.map((item, i) => (
          <ObjectTableRow key={JSON.stringify(item)} item={item} index={i} />
        ))}
      </tbody>
    </StyleTable>
  );
}
