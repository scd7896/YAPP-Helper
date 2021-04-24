import { CertifiCateModel } from "@cmodel";
import { Form, Input } from "atomic";
import * as React from "react";
import { WrapperDiv } from "./CertificateEditForm.styles";

export default function CertificateEditForm() {
  const submitPostCertificates = React.useCallback((args) => {
    console.log(args);
  }, []);
  return (
    <WrapperDiv>
      <Form onSubmit={submitPostCertificates}>
        <Input name="number1" placeholder="title" />
        <Input name="number2" />
        <Input name="number3" />
        <Input name="number4" />
        <button type="submit">submit</button>
      </Form>
    </WrapperDiv>
  );
}
