import * as React from "react";
import { FC } from "react";
import * as color from "utils/styles/color";
import styled from "styled-components";
const Text = styled.p`
  font-family: "Spoqa Han Sans";
  font-size: 16px;
  letter-spacing: -0.29px;
  padding-bottom: 6px;
  color: ${({ selected }) => (selected ? color.helper_blue : color.gray_4)};
  border-bottom: ${({ selected }) => selected && `2px solid ${color.helper_blue}`};
  font-weight: ${({ selected }) => selected && 500};
`;

interface FilterProp {
  children: string;
  value: string;
  onClick?: (arg: string) => void;
  filterValue: string;
}

const Filter: FC<FilterProp> = ({ children, value, onClick, filterValue }) => {
  const clickEvent = () => {
    onClick(value);
  };
  return (
    <Text selected={filterValue === value} onClick={clickEvent}>
      {children}
    </Text>
  );
};

export default Filter;
