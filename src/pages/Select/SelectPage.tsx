import * as React from "react";
import SelectLinkBox from "molecules/SelectLinkBox/SelectLinkBox";
import BigSubTitle from "atomic/FontStyle/Subtitle/Big";
import SmallSubTitle from "atomic/FontStyle/Subtitle/Small";
import {
  WrapperMain,
  ContentsWrapperSection,
  TitleLogoHeader,
  PageTitleSection,
  LinkBoxWrapperSection,
} from "./SelectPage.styles";

const SelectPage = () => {
  return (
    <WrapperMain>
      <ContentsWrapperSection>
        <TitleLogoHeader>YAPP Helper</TitleLogoHeader>
        <PageTitleSection>
          <SmallSubTitle>Helper 일시키기</SmallSubTitle>
          <BigSubTitle>필요한 기능을 선택하세요 🙌</BigSubTitle>
        </PageTitleSection>
        <LinkBoxWrapperSection>
          <SelectLinkBox to="/recruit" title="리쿠르팅 오픈"></SelectLinkBox>
          <SelectLinkBox to="/email/1" title="전형 결과 메일 발송"></SelectLinkBox>
          <SelectLinkBox to="/mailform" title="메일 양식 관리"></SelectLinkBox>
        </LinkBoxWrapperSection>
      </ContentsWrapperSection>
    </WrapperMain>
  );
};

export default SelectPage;
