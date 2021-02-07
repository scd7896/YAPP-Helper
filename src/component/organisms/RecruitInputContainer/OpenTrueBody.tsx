import * as React from "react";
import { useDispatch } from "react-redux";
import { TextInput, RecruitingFont } from "atomic";
import RecruitGuide from "molecules/RecruitGuide/RecruitGuide";
import { setRecruitValue } from "actions/recruit";

import { RecruitBodySection, RecruitInputDataWrapperDiv, RecruitDataWrapperDiv } from "./RecruitInputContainer.styles";

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
    <RecruitBodySection>
      <RecruitGuide type="string" name="generation" title="지원기수" />
      <RecruitDataWrapperDiv>
        <RecruitingFont>모집기간</RecruitingFont>
        {/* 역시 recruitGuide를 재사용하는 방향이 맞네 */}
        <RecruitInputDataWrapperDiv>
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
        </RecruitInputDataWrapperDiv>
      </RecruitDataWrapperDiv>
      <RecruitGuide type="string" name="URL" title="지원링크" />
    </RecruitBodySection>
  );
};

export default OpenTrueBody;
