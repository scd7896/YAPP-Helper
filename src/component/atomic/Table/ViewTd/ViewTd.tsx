import * as React from "react";
import styled from "styled-components";

const Td = styled.td`
  padding-right: 48px;
`;
interface IProp {
  children: string;
}
const ViewTd: React.FC<IProp> = ({ children }) => {
  return (
    <Td>
      <span>{children}</span>
    </Td>
  );
};

export default ViewTd;
