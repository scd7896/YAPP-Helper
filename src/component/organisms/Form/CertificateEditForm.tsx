import * as React from "react";
import * as color from "utils/styles/color";
import { BasicFileInput, Form, Input, MailWriter } from "atomic";
import useModal from "hooks/useModal";
import { Link } from "react-router-dom";
import useCertificate from "hooks/ServiceHook/useCertificate";
import { WrapperDiv } from "./CertificateEditForm.styles";

interface IProp {
  id?: string;
}

export default function CertificateEditForm({ id }: IProp) {
  const { closeModal } = useModal();
  const [loading, setLoading] = React.useState(true);

  const { changeCertificate, createCertificate, requestCertificateDetail, certificate } = useCertificate();
  const submitPostCertificates = React.useCallback(
    async (args) => {
      args.append("subTitle", null);
      if (id) {
        await changeCertificate(parseInt(id, 10), args);
      } else {
        await createCertificate(args);
      }
      alert("업로드 완료 했습니다.");
      closeModal(true);
    },
    [closeModal, id, changeCertificate, createCertificate]
  );

  const getCertificateDetail = React.useCallback(
    async (targetId) => {
      await requestCertificateDetail(parseInt(targetId, 10));

      setLoading(false);
    },
    [requestCertificateDetail]
  );

  React.useEffect(() => {
    if (id) {
      getCertificateDetail(parseInt(id, 10));
    }
  }, [id, getCertificateDetail]);

  if (id && loading) return <div>로딩중</div>;

  return (
    <WrapperDiv>
      <Form onSubmit={submitPostCertificates} style={{ backgroundColor: color.white }} type="multipart/form-data">
        <Input defaultValue={certificate.title} name="title" placeholder="title" required data-message="test" />
        <BasicFileInput defaultImage={certificate.backgroundImage} name="backgroundImage" />
        <MailWriter value={certificate.contents} name="contents" required />
        <button type="submit">submit</button>
        {id && (
          <Link onClick={() => closeModal()} to={`/certificate/${id}`}>
            이 양식으로 보내기
          </Link>
        )}
      </Form>
    </WrapperDiv>
  );
}
