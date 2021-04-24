import * as React from "react";
import { CertifiCateModel } from "@cmodel";
import * as color from "utils/styles/color";
import { BasicFileInput, Form, Input, MailWriter } from "atomic";
import { WrapperDiv } from "./CertificateEditForm.styles";

export default function CertificateEditForm() {
  const submitPostCertificates = React.useCallback((args) => {
    args.append("subTitle", null);
    CertifiCateModel.postCertificates(args);
    console.log(args);
  }, []);
  return (
    <WrapperDiv>
      <Form onSubmit={submitPostCertificates} style={{ backgroundColor: color.white }} type="multipart/form-data">
        <Input name="title" placeholder="title" />
        <BasicFileInput name="backgroundImage" />
        <MailWriter name="contents" />
        <button type="submit">submit</button>
      </Form>
    </WrapperDiv>
  );
}
