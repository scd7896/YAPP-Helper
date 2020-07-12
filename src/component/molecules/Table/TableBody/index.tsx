import * as React from "react";
import { FC } from "react";
import classNames from "classnames";
import styles from "./styles.scss";
import TableRow from "../TableRow";

const cx = classNames.bind(styles);
interface IProp {
  rows: string[][];
}
const TableBody: FC<IProp> = ({ rows }) => {
  return (
    <tbody className={cx("tbody-wrapper")}>
      {rows.map((row, index) => {
        return <TableRow key={`table-body-rows-${index}`} isHead={false} items={row} />;
      })}
    </tbody>
  );
};

export default TableBody;
