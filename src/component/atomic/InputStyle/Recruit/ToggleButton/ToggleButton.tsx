import { RecruitState, RootStore } from "@types";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRecruitValue } from "../../../../../store/action/recruit";
import { SwitchLabel } from "./ToggleButton.styles";

const ToggleButton = ({ name }: RecruitInputCheckNameProp) => {
  const dispatch = useDispatch();
  const recruit = useSelector<RootStore>((state) => state.recruit) as RecruitState;
  const toggleChangeListner = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      setRecruitValue({
        [name]: event.target.checked,
      })
    );
  };
  return (
    <SwitchLabel>
      <input type="checkbox" onChange={toggleChangeListner} checked={recruit[name]} />
      <span className="slider round"></span>
    </SwitchLabel>
  );
};

export default ToggleButton;
