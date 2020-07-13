import * as React from "react";
import { useMemo } from "react";
import classNames from "classnames/bind";
import styles from "./styles.scss";
import { FC } from "react";
import ViewTd from "../../../atomic/Table/ViewTd";

interface IProp {
  sendStatus: boolean | null;
  datas: Array<string>;
}
const cx = classNames.bind(styles);

const StateRow: FC<IProp> = ({ sendStatus, datas }) => {
  const getSendStatus = useMemo(() => {
    if (sendStatus === false) return "success";
    if (sendStatus === true) return "failure";
    return "request";
  }, [sendStatus]);
  const getSendText = useMemo(() => {
    if (sendStatus === false) return "발송성공";
    if (sendStatus === true) return "발송실패";
    return "발송중";
  }, [sendStatus]);
  return (
    <tr className={cx("table-row-style", getSendStatus)}>
      {[...datas, getSendText].map((text, index) => (
        <ViewTd key={text + index}>{text}</ViewTd>
      ))}
    </tr>
  );
};

export default StateRow;
