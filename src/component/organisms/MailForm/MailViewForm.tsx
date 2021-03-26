import * as React from "react";
import useModal from "hooks/useModal";
import { MailState } from "@types";
interface IProp {
  mailTemplate: MailState;
}

const MailViewForm: React.FC<IProp> = ({ mailTemplate }) => {
  const { openModal } = useModal();

  return (
    <>
      <article>
        <p>메일제목 | {mailTemplate.title}</p>
      </article>
      <article>
        <p>헤더이미지</p>
        <picture>
          <img width="100%" height="150px" src={mailTemplate.headImageURL} />
        </picture>
      </article>
      <article>
        <p>메일내용</p>
        <div dangerouslySetInnerHTML={{ __html: mailTemplate.text }} />
      </article>
      <article>
        <p>첨부파일</p>
        <div
          onClick={() => {
            openModal(() => (
              <div>
                <img src={mailTemplate.subImageURL} />
              </div>
            ));
          }}
        >
          {mailTemplate.subImageURL}{" "}
        </div>
      </article>
    </>
  );
};

export default MailViewForm;
