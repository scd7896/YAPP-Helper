import * as React from "react";
import { useState, useEffect, useCallback } from "react";
import SelectLayout from "template/SelectLayout/SelectLayout";
import { getPdfByElement } from "utils/pdf";
import { TestDiv } from "./CertificateCompletion.styles";

const CertificateCompletion = () => {
  const [image, setImage] = useState("");
  const callbackPDFCheck = useCallback(async () => {
    const pdf = await getPdfByElement(document.querySelector("body"), "test.pdf");
    console.log(pdf);
  }, []);

  useEffect(() => {
    callbackPDFCheck();
  }, [callbackPDFCheck]);

  return (
    <SelectLayout>
      <TestDiv id="test">
        <h1>안녕세계</h1>
        <div>이 화면을 전체 끄집어내보자</div>
        <div>이 화면을 전체 끄집어내보자1</div>
        <div>이 화면을 전체 끄집어내보자2</div>
        <div>이 화면을 전체 끄집어내보자3</div>
        <div>이 화면을 전체 끄집어내보자4</div>
        <div>이 화면을 전체 끄집어내보자5</div>
        <div>이 화면을 전체 끄집어내보자6</div>
        <div>이 화면을 전체 끄집어내보자7</div>
        <div>이 화면을 전체 끄집어내보자8</div>
        <div>이 화면을 전체 끄집어내보자9</div>
        <img src={image} alt="test" />
      </TestDiv>
    </SelectLayout>
  );
};

export default CertificateCompletion;