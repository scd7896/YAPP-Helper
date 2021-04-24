import * as React from "react";
import { CertifiCateModel } from "@cmodel";
import * as color from "utils/styles/color";
import { BasicFileInput, Form, Input, MailWriter } from "atomic";
import useModal from "hooks/useModal";
import { WrapperDiv } from "./CertificateEditForm.styles";

interface IProp {
  id?: string;
}

export default function CertificateEditForm({ id }: IProp) {
  const { closeModal } = useModal();
  const [loading, setLoading] = React.useState(true);
  const [defaultTitle, setDefaultTitle] = React.useState();
  const [defaultImage, setDefaultImage] = React.useState();
  const [defaultContents, setDefaultContents] = React.useState();
  const submitPostCertificates = React.useCallback(
    async (args) => {
      args.append("subTitle", null);
      if (id) {
        args.forEach((val, key) => {
          console.log(key, val);
        });
      } else {
        await CertifiCateModel.postCertificates(args);
      }
      alert("업로드 완료 했습니다.");
      closeModal(true);
    },
    [closeModal, id]
  );

  const requestCertificateDetail = React.useCallback(async (targetId) => {
    const res = await CertifiCateModel.getFindById(parseInt(targetId, 10));
    setDefaultTitle(res.payload.title);
    setDefaultImage(res.payload.backgroundImage);
    setDefaultContents(res.payload.contents);
    setLoading(false);
  }, []);

  React.useEffect(() => {
    if (id) {
      requestCertificateDetail(parseInt(id, 10));
    }
  }, [id, requestCertificateDetail]);

  if (id && loading) return <div>로딩중</div>;

  return (
    <WrapperDiv>
      <Form onSubmit={submitPostCertificates} style={{ backgroundColor: color.white }} type="multipart/form-data">
        <Input defaultValue={defaultTitle} name="title" placeholder="title" required data-message="test" />
        <BasicFileInput defaultImage={defaultImage} name="backgroundImage" />
        <MailWriter value={defaultContents} name="contents" required />
        <button type="submit">submit</button>
      </Form>
    </WrapperDiv>
  );
}
