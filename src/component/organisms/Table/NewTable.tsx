import * as React from "react";

import ViewTd from "atomic/Table/ViewTd/ViewTd";
import TableHead from "molecules/Table/TableHead/TableHead";
import { TableColumn } from "@types";
import { StyleTable, Tr } from "./Table.styles";

interface IProp {
  column: Array<TableColumn>;
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
      return null;
    });

    return bodyItem;
  });

  const tableClickListener = React.useCallback(
    (event) => {
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
    },
    [onRowClick, dataSource]
  );

  return (
    <StyleTable onClick={tableClickListener}>
      <TableHead items={headerTitles} selectOption={selectOption} />
      <tbody>
        {bodyItems.map((item, i) => (
          <Tr data-index={i} key={JSON.stringify(item)}>
            {column.map((header) => {
              return header.render ? (
                <td key={JSON.stringify(item) + header.dataIndex}>{header.render(dataSource[i], i)}</td>
              ) : (
                <ViewTd key={JSON.stringify(item) + item[header.dataIndex]}>{item[header.dataIndex]}</ViewTd>
              );
            })}
          </Tr>
        ))}
      </tbody>
    </StyleTable>
  );
}
