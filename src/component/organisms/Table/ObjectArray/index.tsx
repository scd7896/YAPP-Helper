import * as React from "react";
import { FC, useMemo } from "react";
import classNames from "classnames/bind";
import styles from "./styles.scss";
import TableHead from "molecules/Table/TableHead";
import ObjectTableBody from "molecules/Table/ObjectTableBody";

interface IProp {
  datas: Array<object>;
}
const cx = classNames.bind(styles);
const ObjectArrayTable: FC<IProp> = ({ datas }) => {
  const tableHeadDatas = useMemo(() => {
    return Object.keys(datas[0]);
  }, [datas]);
  return (
    <table className={cx("table-style")}>
      <TableHead items={tableHeadDatas} />
      <ObjectTableBody datas={datas} />
    </table>
  );
};

export default ObjectArrayTable;
