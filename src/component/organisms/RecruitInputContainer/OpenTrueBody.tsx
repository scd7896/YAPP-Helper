import * as React from "react";
import { useDispatch } from "react-redux";
import { TextInput } from "atomic";
import RecruitGuide from "molecules/RecruitGuide/RecruitGuide";
import { setRecruitValue } from "actions/recruit";

import { RecruitBodySection, RecruitInputDataWrapperDiv, RecruitDataWrapperDiv } from "./RecruitInputContainer.styles";
import { LineIcon } from "../../atomic/Icon/index";
import { RecruitingFont } from "@font";

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
        <RecruitInputDataWrapperDiv>
          <TextInput
            onChangeFunc={(value) => changeValueHandler(value, "startDay")}
            placeholder="0000.00.00"
            defaultValue="2020.07.10"
            width="86px"
          />
          <LineIcon />
          <TextInput
            onChangeFunc={(value) => changeValueHandler(value, "lastDay")}
            placeholder="0000.00.00"
            defaultValue="2020.07.20"
            width="86px"
          />
        </RecruitInputDataWrapperDiv>
      </RecruitDataWrapperDiv>
      <RecruitGuide type="string" name="URL" title="지원링크" />
    </RecruitBodySection>
  );
};

export default OpenTrueBody;
