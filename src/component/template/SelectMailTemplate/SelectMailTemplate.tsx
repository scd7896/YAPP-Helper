import * as React from "react";
import SelectLinkBox from "molecules/SelectLinkBox/SelectLinkBox";
import { SmallSubTitle, BigSubTitle } from "atomic";
import {
  WrapperSection,
  ContentsWrapperDiv,
  EmailHeaderSection,
  EmailSelectSection,
} from "./SelectMailTemplate.styles";

const SelectMailTemplate = () => {
  return (
    <WrapperSection>
      <ContentsWrapperDiv>
        <EmailHeaderSection>
          <SmallSubTitle>발표전형선택</SmallSubTitle>
          <BigSubTitle>발표할 결과를 선택하세요 🤔</BigSubTitle>
        </EmailHeaderSection>
        <EmailSelectSection>
          <SelectLinkBox to="/email/document/1" title="서류전형 결과안내"></SelectLinkBox>
          <SelectLinkBox to="/email/meeting/1" title="면접전형 결과안내"></SelectLinkBox>
        </EmailSelectSection>
      </ContentsWrapperDiv>
    </WrapperSection>
  );
};

export default SelectMailTemplate;
