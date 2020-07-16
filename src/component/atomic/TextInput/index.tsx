import * as React from "react";
import { useState, FormEvent } from "react";
import "./style.scss";

interface TextInputProps {
  width?: string;
  placeholder?: string;
  defaultValue?: string;
  onInputFunc?: (value: string) => void;
  className?: string;
}

const TextInput = ({ width, placeholder, onInputFunc, className, defaultValue }: TextInputProps) => {
  const onInputHandler = (event: FormEvent<HTMLInputElement>) => {
    if (onInputFunc) {
      onInputFunc((event.target as HTMLInputElement).value);
    }
  };

  return (
    <input
      className={`yapp-text-input ${className ? className : ""}`}
      type="text"
      onInput={onInputHandler}
      placeholder={placeholder}
      value={defaultValue ? defaultValue : ""}
      style={{ width }}
    />
  );
};

export default TextInput;
