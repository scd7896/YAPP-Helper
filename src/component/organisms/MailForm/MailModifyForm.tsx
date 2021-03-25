import * as React from "react";
import { useState, useCallback } from "react";
import { putMailForm } from "utils/api";
import { MailWriter, NomalButton, TextInput } from "atomic";
import {
  TitleWrapperArticle,
  ModifyTitleSpan,
  ModifyPictureWrapperDiv,
  OnImageCoverDiv,
  CoverTextSpan,
} from "./MailModifyForm.styles";
import { MailState } from "@types";
interface IProp {
  mailTemplate: MailState;
}

const MailModifyForm: React.FC<IProp> = ({ mailTemplate }) => {
  const [title, setTitle] = useState<string>(mailTemplate.title);
  const [description, setDescription] = useState<string>(mailTemplate.text);
  const [type, setType] = useState<string>(mailTemplate.type);
  const submitForm = useCallback(() => {
    putMailForm({
      title,
      text: description,
      id: mailTemplate.id,
      pass: mailTemplate.pass,
      type,
      headImageEditMode: true,
      subImageEditMode: true,
    });
  }, [title, description, type, mailTemplate]);
  return (
    <>
      <TitleWrapperArticle>
        <ModifyTitleSpan>메일제목:</ModifyTitleSpan> <TextInput defaultValue={title} onChangeFunc={setTitle} />
      </TitleWrapperArticle>
      <article>
        <p>헤더이미지</p>
        <ModifyPictureWrapperDiv>
          <img src={mailTemplate.headImageURL} />
          <OnImageCoverDiv>
            <CoverTextSpan>파일을 수정하려면 아래 버튼을 클릭하세요 (이미지 사이즈 750px X 150px 권장)</CoverTextSpan>
            <NomalButton color="grayOutLine" size="default">
              파일 수정하기
            </NomalButton>
          </OnImageCoverDiv>
        </ModifyPictureWrapperDiv>
      </article>
      <article>
        <MailWriter value={description} setValue={setDescription} />
      </article>
      <article>
        <span>첨부파일</span> <span>{mailTemplate.subImageURL}</span>{" "}
        <NomalButton color="grayOutLine" size="default" onClick={() => {}}>
          파일 수정하기
        </NomalButton>
      </article>
      <article></article>
    </>
  );
};

export default MailModifyForm;
