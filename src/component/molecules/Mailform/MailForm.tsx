import * as React from "react";
import { useCallback } from "react";
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
import {
  FormWrapperDiv,
  TitleWrapperSection,
  TitleLableSpan,
  HeaderImageWrapperSection,
  HeaderImageLabelSpan,
  HeaderImg,
  MailContentWrapperSection,
  AttchFileWrapperDiv,
  AttchFileLabel,
  SubImg,
  Footer,
} from "./Mailform.styles";

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
    <FormWrapperDiv>
      <TitleWrapperSection>
        <TitleLableSpan>메일제목</TitleLableSpan>
        <TextInput width="100%" placeholder={title} onChangeFunc={changeValue} />
      </TitleWrapperSection>
      <HeaderImageWrapperSection>
        <HeaderImageLabelSpan>헤더이미지</HeaderImageLabelSpan>
        {
          // image Change 라는 함수를 드래그 앤 드랍이나 onChange 가 발생했을 때(눌러서 실행됬을 때) 실행되도록 하면 된다.
          // 드래그 앤 드랍으로 넣을 때 preventDefault 하도록
          headImageEditMode ? (
            <FileInputSecond targetImage="head" fileTypes={["image"]} />
          ) : (
            <HeaderImg src={headImageURL} onClick={headImageClick} />
          )
        }
      </HeaderImageWrapperSection>
      <MailContentWrapperSection>
        <HeaderImageLabelSpan>메일내용</HeaderImageLabelSpan>
        <MailWriter value={text} setValue={mailDescriptionChange} />
      </MailContentWrapperSection>
      {!subImageEditMode && (
        <AttchFileWrapperDiv>
          <AttchFileLabel>첨부파일</AttchFileLabel>
          <NormalButton color="grayOutLine" size="default" onClick={subImageClick}>
            파일 불러오기
          </NormalButton>
        </AttchFileWrapperDiv>
      )}

      {subImageEditMode ? (
        <FileInputSecond targetImage="sub" fileTypes={["image", "xlsx", "zip"]} />
      ) : (
        <SubImg src={subImageURL} onClick={subImageClick} />
      )}

      <Footer>
        <NormalButton color="default" size="default" onClick={submitMailFormPut}>
          저장
        </NormalButton>
        <NormalButton color="ghost" size="default">
          취소
        </NormalButton>
      </Footer>
    </FormWrapperDiv>
  );
};

export default MailForm;
