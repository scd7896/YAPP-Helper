import * as React from "react";
import { FC, useCallback } from "react";
import classNames from "classnames";
import styles from "./styles.scss";
import StateRow from "../StateRow";
interface IProp {
  datas: Array<object>;
}

const cx = classNames.bind(styles);

const ObjectTableBody: FC<IProp> = ({ datas }) => {
  const deleteIsError = useCallback((data) => {
    const copyData = { ...data };
    delete copyData.isError;
    return Object.keys(copyData).map((key) => {
      if (typeof copyData[key] === "boolean") {
        if (copyData[key]) {
          return "합격";
        } else {
          return "불합격";
        }
      }
      return copyData[key];
    });
  }, []);
  return (
    <tbody className={cx("tbody-wrapper")}>
      {datas.map((data: any) => {
        return <StateRow sendStatus={data.isError} datas={deleteIsError(data)} />;
      })}
    </tbody>
  );
};

export default ObjectTableBody;
