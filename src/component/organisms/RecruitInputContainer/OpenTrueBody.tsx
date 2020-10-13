import * as React from "react";
import RecruitGuide from "molecules/RecruitGuide";

import { setRecruitValue } from "actions/recruit";
import { useDispatch, useSelector } from "react-redux";
import { TextInput, RecruitingFont } from "atomic";
import classNames from "classnames/bind";
import styles from "./styles.scss";
const cx = classNames.bind(styles);
const OpenTrueBody = () => {
  const dispatch = useDispatch();
  const changeValueHandler = (value: string, name: string) => {
    dispatch(
      setRecruitValue({
        [name]: value,
      })
    );
  };

  return (
    <section className={cx("recruit-input-body")}>
      <RecruitGuide type="string" name="generation" title="지원기수" />
      <div className={cx("recruit-date-wrapper")}>
        <RecruitingFont>모집기간</RecruitingFont>
        {/* 역시 recruitGuide를 재사용하는 방향이 맞네 */}
        <div className={cx("recruit-date-input-wrapper")}>
          <TextInput
            onChangeFunc={(value) => changeValueHandler(value, "startDay")}
            placeholder="0000.00.00"
            defaultValue="2020.07.10"
            width="105px"
          />
          <TextInput
            onChangeFunc={(value) => changeValueHandler(value, "lastDay")}
            placeholder="0000.00.00"
            defaultValue="2020.07.20"
            width="105px"
          />
        </div>
      </div>
      <RecruitGuide type="string" name="URL" title="지원링크" />
    </section>
  );
};

export default OpenTrueBody;
