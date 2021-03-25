import * as React from "react";
import styled from "styled-components";
import { emailHeadNameList } from "utils/constact";
import { useDispatch } from "react-redux";
import { setExcelKeyValue } from "actions/excelKeySetForm";
import * as color from "utils/styles/color";
import { SetFormKey } from "@types";

const Li = styled.li`
  padding: 8px 0px 8px 10px;
  border-radius: 8px;
  text-align: left;
  font-size: 14px;
  color: ${color.gray_6};
  cursor: pointer;
  &:hover {
    background-color: #f8faff;
    color: ${color.helper_blue};
  }
`;

interface MenuItemProp {
  keyItem: SetFormKey;
  index: number;
  closeFunction: Function;
}

const MenuItem = ({ keyItem, index, closeFunction }: MenuItemProp) => {
  const dispatch = useDispatch();
  const clickListner = () => {
    dispatch(
      setExcelKeyValue({
        key: keyItem,
        value: index,
      })
    );
    closeFunction();
  };
  return <Li onClick={clickListner}>{emailHeadNameList[keyItem]}</Li>;
};

export default MenuItem;
