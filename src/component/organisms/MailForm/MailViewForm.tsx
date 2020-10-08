import * as React from "react";
import classNames from "classnames/bind";
import styles from "./MailViewForm.module.scss";
interface IProp {
  mailTemplate: MailState;
}
const cx = classNames.bind(styles);
const MailViewForm: React.FC<IProp> = ({ mailTemplate }) => {
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
        <div className={cx("subFileName")}>{mailTemplate.subImageURL} </div>
      </article>
    </>
  );
};

export default MailViewForm;
