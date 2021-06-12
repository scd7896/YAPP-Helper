import * as React from "react";
import { useState, useEffect, useMemo } from "react";
import useHisotryRoute from "hooks/useHistoryRoute";
import useDesire from "hooks/useDesire";
import { MailViewForm, MailModifyForm } from "organisms";
import { ModifyButton, NomalButton } from "atomic";
import {
  ContentWrapperSection,
  HeadNavSpan,
  BodySection,
  InnerGradeFooter,
  TitleHeaderWrapper,
} from "./EmailFourthGrade.styles";
import { EmailGradeSubTitleSpan, EmailGradeTitleSpan } from "@font";

const EmailFourthGrade = () => {
  const { pushHistory } = useHisotryRoute();

  const [viewPage, setViewPage] = useState<boolean>(true);
  const [isModify, setIsModify] = useState<boolean>(false);

  const ViewMailForm = useMemo(() => (isModify ? MailModifyForm : MailViewForm), [
    isModify,
    MailModifyForm,
    MailViewForm,
  ]);
  const {
    desireState: { mailTemplates },
    mailTemplatesListFetch,
  } = useDesire();

  const clickHeaderTab = (target: boolean) => () => {
    setViewPage(target);
  };

  const targetIndex = useMemo<number>(() => {
    if (viewPage) {
      return 0;
    } else {
      return 1;
    }
  }, [viewPage]);

  useEffect(() => {
    if (mailTemplates === null) {
      mailTemplatesListFetch("meeting");
    }
  }, [mailTemplates, mailTemplatesListFetch]);

  return (
    <section>
      <TitleHeaderWrapper>
        <EmailGradeTitleSpan style={{ marginBottom: "14px" }}>4.메일내용 확인</EmailGradeTitleSpan>
        <EmailGradeSubTitleSpan>✋잠깐! 보내기 전에 메일내용 확인하세요</EmailGradeSubTitleSpan>
      </TitleHeaderWrapper>
      <ContentWrapperSection>
        <header>
          <HeadNavSpan selected={viewPage} onClick={clickHeaderTab(true)}>
            합격
          </HeadNavSpan>
          <HeadNavSpan selected={!viewPage} onClick={clickHeaderTab(false)}>
            불합격
          </HeadNavSpan>
        </header>
        {mailTemplates !== null && (
          <BodySection>
            <ViewMailForm mailTemplate={mailTemplates[targetIndex]} />

            <article>
              <ModifyButton onClick={() => setIsModify(!isModify)}>수정하기</ModifyButton>
            </article>
          </BodySection>
        )}
      </ContentWrapperSection>

      <InnerGradeFooter>
        <NomalButton
          color="lightBlue"
          size="default"
          onClick={() => {
            pushHistory(`/email/3`);
          }}
        >
          이전
        </NomalButton>
        <NomalButton
          color="default"
          size="default"
          onClick={() => {
            pushHistory(`/email/5`);
          }}
        >
          다음
        </NomalButton>
      </InnerGradeFooter>
    </section>
  );
};

export default EmailFourthGrade;
