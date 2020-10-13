import * as React from "react";
import { useState } from "react";
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
    return (
      <li onClick={onSelectHandler.bind} className={cx("select__item")}>
        {option}
      </li>
    );
  });

  return (
    <div className={cx("select", `${selected ? "selected" : ""}`)} style={{ width: width }}>
      <div className={cx("select__item--selected")} onClick={onClickHandler}>
        {selected ? selectedValue : placeholder}
        <div className={cx("select__dropdown-icon", `${toggled ? "toggled" : ""}`)}></div>
      </div>
      <ul className={cx("select__item-list", `${toggled ? "show" : "hide"}`)}>{optionElements}</ul>
    </div>
  );
};

export default Select;
