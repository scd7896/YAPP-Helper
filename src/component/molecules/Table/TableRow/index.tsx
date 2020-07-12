import * as React from "react";
import { useMemo, FC } from "react";
import ClickHeadTh from "../../../atomic/Table/ClickHeadTh";
import classNames from "classnames/bind";
import styles from "./styles.scss";
import ViewTd from "../../../atomic/Table/ViewTd";
const cx = classNames.bind(styles);

interface IProp extends IIsHaed {
  items: Array<string>;
  isHead: boolean;
}
interface IIsHaed {
  isHead: boolean;
}
const DrawTableData: FCCheckFunction<IIsHaed> = ({ isHead }) => (isHead ? ClickHeadTh : ViewTd);
const TableRow: FC<IProp> = ({ items, isHead }) => {
  const DrawTableMemo = useMemo(() => {
    return DrawTableData({ isHead });
  }, [isHead]);
  return (
    <tr className={cx("table-row-style")}>
      {items.map((item, index) => (
        <DrawTableMemo index={isHead ? index : undefined}>{item}</DrawTableMemo>
      ))}
    </tr>
  );
};

export default TableRow;
