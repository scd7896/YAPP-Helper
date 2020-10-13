import * as React from "react";
import { emailHeadNameList } from "utils/constact";
import { useDispatch } from "react-redux";
import { setExcelKeyValue } from "actions/excelKeySetForm";
import classNames from "classnames/bind";
import styles from "./styles.scss";
interface MenuItemProp {
  keyItem: SetFormKey;
  index: number;
  closeFunction: Function;
}
const cx = classNames.bind(styles);
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
    <li onClick={clickListner} className={cx("menu-item-style")}>
      {emailHeadNameList[keyItem]}
    </li>
  );
};

export default MenuItem;
