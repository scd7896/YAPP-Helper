import * as React from "react";
import { TextInput, ToggleButton, RecruitingFont } from "atomic";
import useRecruit from "hooks/recruit";
import styled from "styled-components";
const WrapperDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  > p {
    margin-right: 28px;
  }
`;

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
    <WrapperDiv>
      <RecruitingFont>{title}</RecruitingFont>
      {name === "isRecruiting" ? (
        <ToggleButton name={name} />
      ) : (
        <TextInput width="257px" onChangeFunc={changeValueHandler} defaultValue={recruit[name] as string} name={name} />
      )}
    </WrapperDiv>
  );
};

export default RecruitGuide;
