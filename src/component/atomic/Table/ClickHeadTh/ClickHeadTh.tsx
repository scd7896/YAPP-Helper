import * as React from "react";
import { useMemo, useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { emailHeadNameList } from "utils/constact";

import { WrapperTh, HeadPrintStringSpan, SelectMenuUl } from "./ClickHeadTh.styles";
import MenuItem from "../MenuItem/MenuItem";
import { ArrowBottom } from "../../Icon";

interface ClickHeadThProp extends FontStyle {
  index: number;
}

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
    <WrapperTh>
      <HeadPrintStringSpan selected={isSelected} onClick={toggleOpen}>
        <span>{printString}</span>
        <ArrowBottom />
      </HeadPrintStringSpan>
      <menu>
        {isMenuOpen && (
          <SelectMenuUl open={isMenuOpen}>
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
          </SelectMenuUl>
        )}
      </menu>
    </WrapperTh>
  );
};

export default ClickHeadTh;
