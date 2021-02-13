import * as React from "react";
import PageHeader from "atomic/PageHeader/PageHeader";
import { WrapperSection, TemplateBodySection } from "./RecruitTemplate.styles";
import SelectLayout from "../SelectLayout/SelectLayout";

interface RecruitTemplateProp {
  children: React.ReactElement;
}

const RecruitTemplate = ({ children }: RecruitTemplateProp) => {
  return (
    <SelectLayout>
      <WrapperSection>
        <PageHeader>리쿠르팅 오픈</PageHeader>
        <TemplateBodySection>{children}</TemplateBodySection>
      </WrapperSection>
    </SelectLayout>
  );
};

export default RecruitTemplate;
