import styled from "styled-components";
import * as color from "utils/styles/color";

export const WrapperTh = styled.th`
  position: relative;
  padding-left: 24px;
`;

export const HeadPrintStringSpan = styled.span`
  display: flex;
  align-items: center;
  color: ${({ selected }) => (selected ? color.helper_blue : color.gray_6)};
  cursor: pointer;
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
  background: #ffffff;
  border: 1px solid ${color.gray_3};
  border-radius: 12px;
  box-shadow: 6px 6px 20px 0 rgba(0, 0, 0, 0.08);
  list-style: none;
  padding: 0 8px;
  width: 162px;
`;
export const SelectMenuHeaderLi = styled.li`
  font-size: 10px;
  color: ${color.gray_5};
  padding: 10px;

  text-align: left;
`;

export const Button = styled.button`
  background-color: inherit;
  border: none;
`;
