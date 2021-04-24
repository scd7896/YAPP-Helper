import * as React from "react";
import { useState } from "react";
import { NomalButton, TextInput } from "atomic";
import { WrapperDiv } from "./EmailInputForm.styles";

interface IProp {
  onSubmit: (arg: string) => void;
}

export default function EmailInputForm({ onSubmit }: IProp) {
  const [mail, setMail] = useState("");
  return (
    <WrapperDiv>
      <div>이메일을 입력해주세요</div>
      <div>
        <TextInput onChangeFunc={setMail} defaultValue={mail} />
      </div>
      <NomalButton color="default" size="default" onClick={() => onSubmit(mail)}>
        전송하기
      </NomalButton>
    </WrapperDiv>
  );
}
