import * as React from "react";
import { useState } from "react";
import "./style.scss";

interface SelectProps {
  width?: string;
  options: string[];
  placeholder: string;
  onSelectFunc: (value: string) => void;
}

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
      <li onClick={onSelectHandler.bind} className="select__item">
        {option}
      </li>
    );
  });

  return (
    <div className={`select ${selected ? "selected" : ""}`} style={{ width: width }}>
      <div className="select__item--selected" onClick={onClickHandler}>
        {selected ? selectedValue : placeholder}
        <div className={`select__dropdown-icon ${toggled ? "toggled" : ""}`}></div>
      </div>
      <ul className={`select__item-list ${toggled ? "show" : "hide"}`}>{optionElements}</ul>
    </div>
  );
};

export default Select;
