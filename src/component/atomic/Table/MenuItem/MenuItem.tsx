import * as React from "react";
import styled from "styled-components";
import { emailHeadNameList } from "utils/constact";
import { useDispatch } from "react-redux";
import { setExcelKeyValue } from "actions/excelKeySetForm";

const Li = styled.li`
  &:hover {
    background-color: #e2e4e8;
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
