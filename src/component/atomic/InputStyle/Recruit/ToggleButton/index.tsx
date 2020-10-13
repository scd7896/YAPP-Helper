import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRecruitValue } from "../../../../../store/action/recruit";
import classNames from "classnames/bind";
import styles from "./styles.scss";
const cx = classNames.bind(styles);
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
    <label className={cx("switch")}>
      <input type="checkbox" onChange={toggleChangeListner} checked={recruit[name]} />
      <span className={cx("slider", "round")}></span>
    </label>
  );
};

export default ToggleButton;
