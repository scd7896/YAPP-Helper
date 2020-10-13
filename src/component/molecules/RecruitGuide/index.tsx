import * as React from "react";
import { TextInput, ToggleButton, RecruitingFont } from "atomic";
import classNames from "classnames/bind";
import styles from "./styles.scss";

// Hooks
import useRecruit from "hooks/recruit";

interface RecruitGuide {
  title: string;
  type: string;
  name: "lastDay" | "startDay" | "URL" | "generation" | "isRecruiting";
}
const cx = classNames.bind(styles);
const RecruitGuide = ({ title, name }: RecruitGuide) => {
  const recruit = useRecruit();
  const changeValueHandler = (value: string) => {
    recruit.setValue({ [name]: value });
  };

  return (
    <div className={cx("recruit-input-wrapper")}>
      <RecruitingFont>{title}</RecruitingFont>
      {name === "isRecruiting" ? (
        <ToggleButton name={name} />
      ) : (
        <TextInput
          width="257px"
          className={cx("recruit-string-input-style")}
          onChangeFunc={changeValueHandler}
          defaultValue={recruit[name] as string}
          name={name}
        />
      )}
    </div>
  );
};

export default RecruitGuide;
