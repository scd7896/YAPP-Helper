import * as React from "react";
import { HeadGrade } from "organisms";
import { SmallSubTitle } from "@font";
import { WrapperHeader, ContentsWrapperSection, BodyWrapperSection } from "./EmailGradeTemplate.styles";
import SelectLayout from "../SelectLayout/SelectLayout";

interface EmailGradeTemplateProp {
  children: React.ReactElement | React.ReactElement[];
}

const EmailGradeTemplate = ({ children }: EmailGradeTemplateProp) => {
  /**
   * todo: match.params.grade 단계에 따라서 다른 컴포넌트를 그린다
   */

  return (
    <div>
      <SelectLayout>
        <WrapperHeader>
          <ContentsWrapperSection>
            <SmallSubTitle>결과메일 발송</SmallSubTitle>
            {/* <VerticalBar /> */}
            <HeadGrade
              gradeList={["엑셀파일업로드", "셀 헤더 설정", "셀 분류 확인", "메일내용확인", "실시간 발송확인"]}
            />
          </ContentsWrapperSection>
        </WrapperHeader>
        <BodyWrapperSection>{children}</BodyWrapperSection>
      </SelectLayout>
    </div>
  );
};

export default EmailGradeTemplate;
