import * as React from "react";
import { useState, useEffect, useMemo } from "react";
import classNames from "classnames/bind";
import styles from "./styles.scss";
import useHisotryRoute from "hooks/useHistoryRoute";
import useDesire from "hooks/useDesire";
import { MailViewForm, MailModifyForm } from "organisms";
import { ModifyButton, PictureModal, NomalButton } from "atomic";

const cx = classNames.bind(styles);

const Fourth = () => {
  const { pushHistory } = useHisotryRoute();

  const [viewPage, setViewPage] = useState<boolean>(true);
  const [isModal, setIsModal] = useState<boolean>(false);
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
      mailTemplatesListFetch();
    }
  }, [mailTemplates, mailTemplatesListFetch]);

  return (
    <section className={cx("page-wrapper")}>
      {mailTemplates !== null && (
        <PictureModal
          onClick={() => {
            setIsModal(false);
          }}
          isOpen={isModal}
          src={mailTemplates[targetIndex].subImageURL}
        />
      )}
      <p>4.메일내용 확인</p>
      <p>잠깐! 보내기 전에 메일내용 확인하세요</p>
      <section className={cx("content-wrapper")}>
        <header>
          <span className={cx("head-nav-button", { selected: viewPage })} onClick={clickHeaderTab(true)}>
            합격
          </span>
          <span className={cx("head-nav-button", { selected: !viewPage })} onClick={clickHeaderTab(false)}>
            불합격
          </span>
        </header>
        {mailTemplates !== null && (
          <section className={cx("body")}>
            <ViewMailForm mailTemplate={mailTemplates[targetIndex]} />

            <article>
              <ModifyButton onClick={() => setIsModify(!isModify)}>수정하기</ModifyButton>
            </article>
          </section>
        )}
      </section>

      <footer className="inner-grade-footer">
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
      </footer>
    </section>
  );
};

export default Fourth;
