import * as React from "react";
import { useState } from "react";
import { SelectDiv, SelectItemLi, SelectItemListUl, SelectDropDownIcon, SelectItemSelectedDiv } from "./Select.styles";
import classNames from "classnames/bind";
import styles from "./style.scss";

interface SelectProps {
  width?: string;
  options: string[];
  placeholder: string;
  onSelectFunc: (value: string) => void;
}
const cx = classNames.bind(styles);
const Select = ({ width, options, placeholder, onSelectFunc }: SelectProps) => {
  const [toggled, setToggled] = useState(false);
  const [selected, setSelected] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const onClickHandler = () => {
    setToggled(!toggled);
  };

  const onSelectHandler = (event: Event) => {
    setSelected(true);
    setSelectedValue((event.target as HTMLLIElement).innerText);
    setToggled(!toggled);
    onSelectFunc(selectedValue);
  };

  const optionElements = options.map((option) => {
    return <SelectItemLi onClick={onSelectHandler.bind}>{option}</SelectItemLi>;
  });

  return (
    <SelectDiv selected={selected} style={{ width: width }}>
      <SelectItemSelectedDiv onClick={onClickHandler}>
        {selected ? selectedValue : placeholder}
        <SelectDropDownIcon toggled={toggled} />
      </SelectItemSelectedDiv>
      <SelectItemListUl isShow={toggled}>{optionElements}</SelectItemListUl>
    </SelectDiv>
  );
};

export default Select;
