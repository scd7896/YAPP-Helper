import * as React from "react";
import RecruitingFont from "atomic/FontStyle/RecruitingFont";
import ToggleButton from "atomic/InputStyle/Recruit/ToggleButton";
import TextInput from "atomic/TextInput";
import { useDispatch, useSelector } from "react-redux";
import { setRecruitValue } from "actions/recruit";
import "./styles.scss";

// Hooks
import useRecruit from "hooks/recruit";

interface RecruitGuide {
  title: string;
  type: string;
  name: "lastDay" | "startDay" | "URL" | "generation" | "isRecruiting";
}

const RecruitGuide = ({ title, name }: RecruitGuide) => {
  const recruit = useRecruit();
  const changeValueHandler = (value: string) => {
    recruit.setValue({ [name]: value });
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
          name={name}
        />
      )}
    </div>
  );
};

export default RecruitGuide;
