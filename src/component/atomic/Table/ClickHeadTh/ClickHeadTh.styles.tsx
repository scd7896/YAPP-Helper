import styled from "styled-components";
import * as color from "utils/styles/color";

export const WrapperTh = styled.th`
  position: relative;
  padding-left: 24px;
`;

export const HeadPrintStringSpan = styled.span`
  display: flex;
  align-items: center;
  color: ${({ selected }) => (selected ? "#3562ff" : color.gray_6)};
  font-size: 14px;
  > * {
    margin-right: 8px;
  }
`;

export const SelectMenuUl = styled.ul`
  display: ${({ open }) => (open ? "block" : "none")};
  position: absolute;
  left: 0;
  top: 10px;
  background: white;
  list-style: none;
  padding: 0;
  width: 162px;
`;

export const Button = styled.button`
  background-color: inherit;
  border: none;
`;
