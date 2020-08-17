import * as React from "react";
import { useCallback } from "react";
import styles from "./styles.scss";
import classNames from "classnames/bind";
import FileInput from "atomic/File/FileInput";
import MailWriter from "atomic/MailWriter";
import TextInput from "atomic/TextInput";

import { useSelector, useDispatch } from "react-redux";
import {
  setMailTitle,
  setMailHeadImage,
  toggleMailHeadImageEditMode,
  toggleMailSubImageEditMode,
  putMailFormRequest,
} from "actions/mail";
import NormalButton from "atomic/Button/NomalButton";

const cx = classNames.bind(styles);

const MailForm = () => {
  const dispatch = useDispatch();
  const { title, headImageURL, subImageURL, headImageEditMode, subImageEditMode } = useSelector<RootStore>(
    (state) => state.mail
  ) as MailInputState;
  const changeValue = useCallback((value: string) => {
    dispatch(setMailTitle(value));
  }, []);
  const headImageClick = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    dispatch(toggleMailHeadImageEditMode());
  };

  const subImageClick = () => {
    dispatch(toggleMailSubImageEditMode());
  };

  const imageChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setMailHeadImage(event.target.files[0]));
  }, []);
  const submitMailFormPut = useCallback(() => {
    dispatch(putMailFormRequest());
  }, []);

  return (
    <div className={cx("form-wrapper")}>
      <section className={cx("title-wrapper")}>
        <span className="title-label">메일제목</span>
        <TextInput width="100%" placeholder={title} onChangeFunc={changeValue} />
      </section>
      <section className={cx("header-image-wrapper")}>
        <span className="header-image-label">헤더이미지</span>
        {
          // image Change 라는 함수를 드래그 앤 드랍이나 onChange 가 발생했을 때(눌러서 실행됬을 때) 실행되도록 하면 된다.
          // 드래그 앤 드랍으로 넣을 때 preventDefault 하도록
          headImageEditMode ? (
            <FileInput targetImage="head" fileTypes={["image"]} />
          ) : (
            <img className="header-image" src={headImageURL} onClick={headImageClick} />
          )
        }
      </section>
      <section className={cx("mail-content-wrapper")}>
        <span className="mail-content-label">메일내용</span>
        <MailWriter className="mail-content" />
      </section>
      {!subImageEditMode && (
        <div className="attach-file-wrapper">
          <label className="attach-file-label">첨부파일</label>
          <NormalButton color="grayOutLine" size="default" onClick={subImageClick}>
            파일 불러오기
          </NormalButton>
        </div>
      )}

      {subImageEditMode ? (
        <FileInput targetImage="sub" fileTypes={["image", "xlsx", "zip"]} />
      ) : (
        <img className="sub-image" src={subImageURL} onClick={subImageClick} />
      )}

      <footer className="footer">
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
