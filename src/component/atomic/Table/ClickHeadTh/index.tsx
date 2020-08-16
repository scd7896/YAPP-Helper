import * as React from "react";
import { useMemo, useState, useCallback } from "react";
import { useSelector } from "react-redux";
import classNames from "classnames/bind";
import styles from "./styles.scss";

import { emailHeadNameList } from "utils/constact";
import SmallIconWrapper from "../../IconWrapper/Small";
import MenuItem from "../MenuItem";
import { ArrowBottom } from "../../Icon";

interface ClickHeadThProp extends FontStyle {
  index: number;
}
const cx = classNames.bind(styles);
const ClickHeadTh = ({ children, index }: ClickHeadThProp) => {
  const keySet = useSelector<RootStore>((state) => state.excelKeySetForm) as excelKeySetFormState;
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const isSelected = useMemo<boolean>(() => {
    const keys = Object.keys(keySet);
    for (let i = 0; i < keys.length; i++) {
      const key: SetFormKey = keys[i] as SetFormKey;
      if (keySet[key] === index) {
        return true;
      }
    }
    return false;
  }, [keySet]);
  const printString = useMemo<string>(() => {
    if (isSelected) {
      const keys = Object.keys(keySet);
      for (let i = 0; i < keys.length; i++) {
        const key: SetFormKey = keys[i] as SetFormKey;
        if (keySet[key] === index) {
          return emailHeadNameList[key];
        }
      }
    } else {
      return children;
    }
  }, [isSelected, keySet]);
  const toggleOpen = useCallback(() => {
    setIsMenuOpen(!isMenuOpen);
  }, [isMenuOpen]);
  return (
    <th className={cx("thwrapper")}>
      <span onClick={toggleOpen} className={cx("head-print-string", { selected: isSelected })}>
        <span>{printString}</span>
        <ArrowBottom />
      </span>
      <menu className={cx("head-menu-wrapper")}>
        {isMenuOpen && (
          <ul className={cx("select-menu-list", { open: isMenuOpen })}>
            <li>셀 역할 선택</li>
            {Object.keys(keySet).map((el, keyIndex) => {
              return (
                <MenuItem
                  key={`item${el}${keyIndex}${index}`}
                  keyItem={el as SetFormKey}
                  index={index}
                  closeFunction={toggleOpen}
                />
              );
            })}
          </ul>
        )}
      </menu>
    </th>
  );
};

export default ClickHeadTh;
