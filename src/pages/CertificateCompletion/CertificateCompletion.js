import * as React from "react";
import { useState, useEffect } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

import { TestDiv } from "./CertificateCompletion.styles";

const CertificateCompletion = () => {
  const [image, setImage] = useState("");
  useEffect(() => {
    html2canvas(document.querySelector("body")).then(function (canvas) {
      const doc = new jsPDF();
      const imgData = canvas.toDataURL("image/png");
      setImage(imgData);
      doc.addImage(imgData, "PNG", 0, 0);
      doc.save("sample-file.pdf");
    });
  }, []);
  return (
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

      <img src={image} />
    </TestDiv>
  );
};

export default CertificateCompletion;
