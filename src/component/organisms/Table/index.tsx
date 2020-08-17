import * as React from "react";
import { FC } from "react";
import classNames from "classnames/bind";
import styles from "./styles.scss";
import TableHead from "molecules/Table/TableHead";
import TableBody from "molecules/Table/TableBody";

const cx = classNames.bind(styles);
interface IProp {
  headItems?: string[];
  bodyItems: string[][];
}
const Table: FC<IProp> = ({ headItems, bodyItems }) => {
  return (
    <table className={cx("table-style")}>
      {headItems && <TableHead items={headItems} />}
      <TableBody rows={bodyItems} />
    </table>
  );
};

export default Table;
