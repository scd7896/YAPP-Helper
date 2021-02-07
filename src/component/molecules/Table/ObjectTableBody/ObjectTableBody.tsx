import * as React from "react";
import { FC, useCallback } from "react";
import styled from "styled-components";
import StateRow from "../StateRow/StateRow";

const Tbody = styled.tbody`
  display: block;
  height: 410px;
  overflow-y: scroll;
`;

interface IProp {
  datas: Array<object>;
}

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
    <Tbody>
      {datas.map((data: any) => {
        return <StateRow sendStatus={data.isError} datas={deleteIsError(data)} />;
      })}
    </Tbody>
  );
};

export default ObjectTableBody;
