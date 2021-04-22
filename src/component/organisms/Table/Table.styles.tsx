import styled from "styled-components";
import * as color from "utils/styles/color";

export const StyleTable = styled.table`
  background-color: #ffffff;
  thead,
  tbody tr {
    display: table;
    width: 100%;
    table-layout: fixed;
  }
`;

export const Tr = styled.tr`
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
