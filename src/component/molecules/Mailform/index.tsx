import * as React from "react";
import { useCallback } from "react";
import styles from "./styles.scss";
import classNames from "classnames/bind";
import { MailWriter, FileInputSecond, TextInput, NomalButton as NormalButton } from "atomic";

import { useDispatch } from "react-redux";
import {
  setMailTitle,
  toggleMailHeadImageEditMode,
  toggleMailSubImageEditMode,
  putMailFormRequest,
  setMailTextValue,
} from "actions/mail";
import useMailform from "hooks/useMailform";

const cx = classNames.bind(styles);

const MailForm = () => {
  const dispatch = useDispatch();
  const {
    mailformState: { title, headImageURL, subImageURL, headImageEditMode, subImageEditMode, text },
  } = useMailform();

  const changeValue = useCallback((value: string) => {
    dispatch(setMailTitle(value));
  }, []);
  const headImageClick = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    dispatch(toggleMailHeadImageEditMode());
  };

  const subImageClick = () => {
    dispatch(toggleMailSubImageEditMode());
  };

  const submitMailFormPut = useCallback(() => {
    dispatch(putMailFormRequest());
  }, []);

  const mailDescriptionChange = useCallback((value: string) => {
    dispatch(setMailTextValue(value));
  }, []);

  return (
    <div className={cx("form-wrapper")}>
      <section className={cx("title-wrapper")}>
        <span className={cx("title-label")}>메일제목</span>
        <TextInput width="100%" placeholder={title} onChangeFunc={changeValue} />
      </section>
      <section className={cx("header-image-wrapper")}>
        <span className={cx("header-image-label")}>헤더이미지</span>
        {
          // image Change 라는 함수를 드래그 앤 드랍이나 onChange 가 발생했을 때(눌러서 실행됬을 때) 실행되도록 하면 된다.
          // 드래그 앤 드랍으로 넣을 때 preventDefault 하도록
          headImageEditMode ? (
            <FileInputSecond targetImage="head" fileTypes={["image"]} />
          ) : (
            <img className={cx("header-image")} src={headImageURL} onClick={headImageClick} />
          )
        }
      </section>
      <section className={cx("mail-content-wrapper")}>
        <span className={cx("mail-content-label")}>메일내용</span>
        <MailWriter className={cx("mail-content")} value={text} setValue={mailDescriptionChange} />
      </section>
      {!subImageEditMode && (
        <div className={cx("attach-file-wrapper")}>
          <label className={cx("attach-file-label")}>첨부파일</label>
          <NormalButton color="grayOutLine" size="default" onClick={subImageClick}>
            파일 불러오기
          </NormalButton>
        </div>
      )}

      {subImageEditMode ? (
        <FileInputSecond targetImage="sub" fileTypes={["image", "xlsx", "zip"]} />
      ) : (
        <img className={cx("sub-image")} src={subImageURL} onClick={subImageClick} />
      )}

      <footer className={cx("footer")}>
        <NormalButton color="default" size="default" onClick={submitMailFormPut}>
          저장
        </NormalButton>
        <NormalButton color="ghost" size="default">
          취소
        </NormalButton>
      </footer>
    </div>
  );
};

export default MailForm;
