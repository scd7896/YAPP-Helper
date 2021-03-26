import * as React from "react";
import { useMemo, useState, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { emailHeadNameList } from "utils/constact";

import { WrapperTh, HeadPrintStringSpan, SelectMenuUl, SelectMenuHeaderLi } from "./ClickHeadTh.styles";
import MenuItem from "../MenuItem/MenuItem";
import { ArrowBottom } from "../../Icon";
import { excelKeySetFormState, FontStyle, RootStore, SetFormKey } from "@types";

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

  const toggleOpen = useCallback(
    (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
      e.stopPropagation();
      setIsMenuOpen((prev) => !prev);
    },
    [isMenuOpen]
  );
  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, [setIsMenuOpen]);

  useEffect(() => {
    window.addEventListener("click", closeMenu);

    return () => {
      window.removeEventListener("click", closeMenu);
    };
  }, [closeMenu]);

  return (
    <WrapperTh>
      <HeadPrintStringSpan selected={isSelected} onClick={toggleOpen}>
        <span>{printString}</span>
        <ArrowBottom />
      </HeadPrintStringSpan>
      <menu>
        {isMenuOpen && (
          <SelectMenuUl open={isMenuOpen}>
            <SelectMenuHeaderLi onClick={(e) => e.stopPropagation()}>셀 역할 선택</SelectMenuHeaderLi>
            {Object.keys(keySet).map((el, keyIndex) => {
              return (
                <MenuItem
                  key={`item${el}${keyIndex}${index}`}
                  keyItem={el as SetFormKey}
                  index={index}
                  closeFunction={closeMenu}
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
