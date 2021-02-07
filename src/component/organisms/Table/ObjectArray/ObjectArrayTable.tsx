import * as React from "react";
import { FC, useMemo } from "react";
import TableHead from "molecules/Table/TableHead/TableHead";
import ObjectTableBody from "molecules/Table/ObjectTableBody/ObjectTableBody";
import { StyleTable } from "../Table.styles";

interface IProp {
  datas: Array<object>;
}

const ObjectArrayTable: FC<IProp> = ({ datas }) => {
  const tableHeadDatas = useMemo(() => {
    return Object.keys(datas[0]);
  }, [datas]);
  return (
    <StyleTable>
      <TableHead items={tableHeadDatas} />
      <ObjectTableBody datas={datas} />
    </StyleTable>
  );
};

export default ObjectArrayTable;
