import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRecruitValue } from "actions/recruit";

import TextInput from "../../../TextInput";
import classNames from "classnames/bind";
import styles from "./styles.scss";
const cx = classNames.bind(styles);
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
    <TextInput
      className={cx("recruit-string-input-style")}
      onChangeFunc={changeValueHandler}
      defaultValue={recruit[name].toString()}
      placeholder={placeholder}
    />
  );
};

export default RecruitInput;
