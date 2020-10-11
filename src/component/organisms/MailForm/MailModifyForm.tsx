import * as React from "react";
import classNames from "classnames/bind";
import styles from "./MailModifyForm.module.scss";
import { useState, useCallback } from "react";
import { putMailForm } from "utils/api";
import { MailWriter, NomalButton, TextInput } from "atomic";

interface IProp {
  mailTemplate: MailState;
}
const cx = classNames.bind(styles);
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
      <article className={cx("titleWrapper")}>
        <span className={cx("modifyTitle")}>메일제목:</span>{" "}
        <TextInput className={cx("rowInput")} defaultValue={title} onChangeFunc={setTitle} />
      </article>
      <article>
        <p>헤더이미지</p>
        <div className={cx("modifyPictureWrapper")}>
          <img src={mailTemplate.headImageURL} />
          <div className={cx("onImageCover")}>
            <span className={cx("coverText")}>
              파일을 수정하려면 아래 버튼을 클릭하세요 (이미지 사이즈 750px X 150px 권장)
            </span>
            <NomalButton color="grayOutLine" size="default" onClick={() => console.log("test")}>
              파일 수정하기
            </NomalButton>
          </div>
        </div>
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
