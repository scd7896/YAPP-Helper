import * as React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import MailFormTemplate from "template/MailFormTemplate/MailFormTemplate";
import MailForm from "molecules/Mailform/MailForm";
import { TabBar, PageHeader } from "atomic";
import { setMailSelectIndex } from "actions/mail";
import useDesire from "hooks/useDesire";
import useMailform from "hooks/useMailform";
import { BodySection, FormWrapperDiv, TabBarWrapperDiv } from "./MailFormPage.styles";

const mailTypeText = {
  meeting: "모집",
  completion: "수료",
};

const MailFormPage = () => {
  const dispatch = useDispatch();
  const {
    desireState: { mailTemplates },
    mailTemplatesListFetch,
  } = useDesire();

  const {
    mailformState: { selectIndex },
    setSelectMailForm,
  } = useMailform();

  useEffect(() => {
    mailTemplatesListFetch();
  }, [mailTemplatesListFetch]);

  useEffect(() => {
    if (mailTemplates && selectIndex != null) {
      setSelectMailForm(mailTemplates[selectIndex]);
    }
  }, [mailTemplates, selectIndex, setSelectMailForm]);

  const tabChangeHandler = (index: number) => () => {
    dispatch(setMailSelectIndex(index));
  };

  const getKindText = React.useCallback((type, pass) => {
    switch (type) {
      case "meeting":
        if (pass) return "합격";
        else return "불합격";
      default:
        return "";
    }
  }, []);
  return (
    <MailFormTemplate>
      <PageHeader>메일양식 관리</PageHeader>
      <BodySection>
        <FormWrapperDiv>
          <TabBarWrapperDiv>
            {mailTemplates &&
              mailTemplates.map(({ pass, type }, index) => (
                <TabBar
                  text={`${mailTypeText[type]} ${getKindText(type, pass)} 양식`}
                  isSelected={index === selectIndex}
                  handler={tabChangeHandler(index)}
                />
              ))}
          </TabBarWrapperDiv>
          <MailForm />
        </FormWrapperDiv>
      </BodySection>
    </MailFormTemplate>
  );
};

export default MailFormPage;
