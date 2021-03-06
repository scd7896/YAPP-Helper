import * as React from "react";
import { FC } from "react";
import ViewTd from "atomic/Table/ViewTd/ViewTd";
import styled from "styled-components";
import * as color from "utils/styles/color";

const Tr = styled.tr`
  height: 50px;
  > td {
    border-bottom: 1px solid ${color.gray_3};
    padding-left: 24px;
    font-size: 14px;
    color: ${color.gray_5};
    letter-spacing: -0.25px;
  }

  > th {
    border-bottom: 1px solid ${color.gray_3};
  }
`;
interface IProp {
  item: object;
  onRowClick?: (item: object) => void;
  index: number;
}
const ObjectTableRow: FC<IProp> = ({ item, index }) => (
  <Tr data-index={index}>
    {Object.values(item).map((value) => (
      <ViewTd key={JSON.stringify(item) + value}>{value}</ViewTd>
    ))}
  </Tr>
);

export default ObjectTableRow;
