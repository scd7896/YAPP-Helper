import * as React from "react";
import { emailHeadNameList } from "../../../../utill/constact";
import { useDispatch } from "react-redux";
import { setExcelKeyValue } from "../../../../store/action/excelKeySetForm";

import "./styles.scss";
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
  return (
    <li onClick={clickListner} className="menu-item-style">
      {emailHeadNameList[keyItem]}
    </li>
  );
};

export default MenuItem;
