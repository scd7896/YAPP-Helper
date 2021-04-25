import * as React from "react";
import { useState, useEffect, useCallback } from "react";
import useCertificate from "hooks/ServiceHook/useCertificate";
import { RenderCertificate } from "organisms";
import { useParams } from "react-router-dom";
import SelectLayout from "template/SelectLayout/SelectLayout";
import { getPdfByElement, testImage } from "utils/pdf";
import { ContentsWrapperDiv } from "./CertificateCompletion.styles";

const CertificateCompletion = () => {
  const [image, setImage] = useState("");
  const { id } = useParams<{ id: string }>();
  const { certificate, requestCertificateDetail } = useCertificate();
  const callbackPDFCheck = useCallback(async () => {
    const pdf = await getPdfByElement(document.querySelector("#test"), "test.pdf");

    // const imgData = await testImage(document.querySelector("#test"));
    // setImage(imgData);
    // console.log(pdf);
  }, []);

  // useEffect(() => {
  //   callbackPDFCheck();
  // }, [callbackPDFCheck]);

  useEffect(() => {
    requestCertificateDetail(parseInt(id, 10));
  }, [requestCertificateDetail, id]);
  if (!certificate) return <div>로딩중</div>;
  return (
    <SelectLayout>
      <button type="button" onClick={callbackPDFCheck}>
        test download
      </button>
      {image && <img src={image} alt="ts" />}
      <ContentsWrapperDiv id="test">
        <RenderCertificate certificate={certificate} />
      </ContentsWrapperDiv>
    </SelectLayout>
  );
};

export default CertificateCompletion;
