import * as React from "react";
import RecruitingFont from "../../atomic/FontStyle/RecruitingFont";
import ToggleButton from "../../atomic/InputStyle/Recruit/ToggleButton";
import TextInput from "../../atomic/TextInput";
import { useDispatch, useSelector } from "react-redux";
import { setRecruitValue } from "../../../store/action/recruit";

import "./styles.scss";

interface RecruitGuide {
  title: string;
  type: string;
  name: "lastDay" | "startDay" | "URL" | "generation" | "isRecruiting";
}

const RecruitGuide = ({ title, name }: RecruitGuide) => {
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
    <div className="recruit-input-wrapper">
      <RecruitingFont>{title}</RecruitingFont>
      {name === "isRecruiting" ? (
        <ToggleButton name={name} />
      ) : (
        <TextInput
          width="257px"
          className="recruit-string-input-style"
          onChangeFunc={changeValueHandler}
          defaultValue={recruit[name] as string}
        />
      )}
    </div>
  );
};

export default RecruitGuide;
