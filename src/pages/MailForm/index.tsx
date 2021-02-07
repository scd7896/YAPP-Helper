import * as React from "react";
import { useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./styles.scss";
import { useDispatch } from "react-redux";
import MailFormTemplate from "template/MailFormTemplate";
import MailForm from "molecules/Mailform/MailForm";
import { TabBar, PageHeader } from "atomic";
import { setMailSelectIndex } from "actions/mail";
import useDesire from "hooks/useDesire";
import useMailform from "hooks/useMailform";

const cx = classNames.bind(styles);

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
  return (
    <MailFormTemplate>
      <PageHeader>메일양식 관리</PageHeader>
      <section className={cx("body")}>
        <div className={cx("form-wrapper")}>
          <div className={cx("tab-bar-wrapper")}>
            {mailTemplates &&
              mailTemplates.map(({ pass }, index) => (
                <TabBar
                  text={pass ? " 합격" : " 불합격"}
                  isSelected={index === selectIndex}
                  handler={tabChangeHandler(index)}
                />
              ))}
          </div>
          <MailForm />
        </div>
      </section>
    </MailFormTemplate>
  );
};

export default MailFormPage;
