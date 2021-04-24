import * as React from "react";
import SelectLayout from "template/SelectLayout/SelectLayout";
import useCertificate from "hooks/ServiceHook/useCertificate";

import { NomalButton } from "atomic";
import useModal from "hooks/useModal";
import CertificateEditForm from "organisms/Form/CertificateEditForm";
import { WrapperDiv } from "./CertificateForm.styles";

export default function CertificateFormPage() {
  const { requestCertificateList } = useCertificate();
  const { openModal } = useModal();

  React.useEffect(() => {
    requestCertificateList();
  }, [requestCertificateList]);

  const postModalOn = React.useCallback(() => {
    openModal(CertificateEditForm, { onClose: () => requestCertificateList() });
  }, [openModal, requestCertificateList]);

  return (
    <SelectLayout>
      <WrapperDiv>
        <div>test</div>
        <NomalButton color="default" size="default" onClick={postModalOn}>
          추가하기
        </NomalButton>
      </WrapperDiv>
    </SelectLayout>
  );
}
