import * as React from "react";
import { useState, FormEvent } from "react";
import styled from "styled-components";
const Input = styled.input`
  // 전체 디자인
  outline: none;
  border: solid 1px var(--gray2);
  border-radius: 4px;
  padding: 10px 12px;

  // 폰트
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.25px;
  color: var(--gray6);

  // 모션
  transition: border-color 0.5s;

  // 액션
  &:focus {
    outline: none;
    border-color: var(--helperblue);
  }

  // 슈도 엘리먼트
  &::placeholder {
    color: var(--gray4);
  }
`;
interface TextInputProps {
  width?: string;
  placeholder?: string;
  name?: string;
  defaultValue?: string;
  onChangeFunc?: (value: string) => void;
  className?: string;
}

const TextInput = ({ name, width, placeholder, onChangeFunc, className, defaultValue }: TextInputProps) => {
  const onChangeHandler = (event: FormEvent<HTMLInputElement>) => {
    if (onChangeFunc) {
      onChangeFunc((event.target as HTMLInputElement).value);
    }
  };

  return (
    <Input
      type="text"
      onChange={onChangeHandler}
      placeholder={placeholder}
      defaultValue={defaultValue ? defaultValue : ""}
      style={{ width }}
      name={name}
    />
  );
};

export default TextInput;
