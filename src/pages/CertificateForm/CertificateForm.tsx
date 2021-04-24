import * as React from "react";
import SelectLayout from "template/SelectLayout/SelectLayout";
import useCertificate from "hooks/ServiceHook/useCertificate";

import { NomalButton } from "atomic";
import useModal from "hooks/useModal";
import { WrapperDiv } from "./CertificateForm.styles";

export default function CertificateFormPage() {
  const { requestCertificateList } = useCertificate();
  const { openModal } = useModal();

  React.useEffect(() => {
    requestCertificateList();
  }, [requestCertificateList]);

  return (
    <SelectLayout>
      <WrapperDiv>
        <div>test</div>
        <NomalButton color="default" size="default">
          추가하기
        </NomalButton>
      </WrapperDiv>
    </SelectLayout>
  );
}
