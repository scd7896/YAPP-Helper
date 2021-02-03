import * as React from "react";
import styled from "styled-components";
const Input = styled.input`
  // 전체 디자인
  outline: none;
  border: solid 1px var(--gray2);
  border-radius: 4px;
  padding: 10px 12px;

  border: solid 1px silver;
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

import { useDispatch, useSelector } from "react-redux";
import { setRecruitValue } from "actions/recruit";

const RecruitInput = ({ name, placeholder, style }: RecruitInputNameProp) => {
  const dispatch = useDispatch();
  const recruit = useSelector<RootStore>((state) => state.recruit) as RecruitState;
  const changeValueHandler = (value: string) => {
    dispatch(
      setRecruitValue({
        [name]: value,
      })
    );
  };
  return (
    <Input
      onChange={(e) => changeValueHandler(e.target.value)}
      defaultValue={recruit[name].toString()}
      placeholder={placeholder}
    />
  );
};

export default RecruitInput;
