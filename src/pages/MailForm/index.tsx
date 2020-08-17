import * as React from "react";
import { useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { getMailTemplatesAllList } from "actions/desire";
import MailFormTemplate from "template/MailFormTemplate";
import MailForm from "molecules/Mailform";
import TabBar from "atomic/Nav/TabBar";
import PageHeader from "atomic/PageHeader";

import { setMailForm, setMailSelectIndex } from "actions/mail";
import { mailTypeListByPathName } from "utils/constact";

const cx = classNames.bind(styles);

const MailFormPage = () => {
  const dispatch = useDispatch();
  const { mailTemplates } = useSelector<RootStore>((state) => state.desire) as DesireState;
  const { selectIndex } = useSelector<RootStore>((state) => state.mail) as MailInputState;
  useEffect(() => {
    dispatch(getMailTemplatesAllList());
  }, []);

  useEffect(() => {
    if (mailTemplates && selectIndex != null) {
      dispatch(setMailForm(mailTemplates[selectIndex]));
    }
  }, [mailTemplates, selectIndex]);

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
              mailTemplates.map(({ type, pass }, index) => {
                const tabTitle = pass
                  ? mailTypeListByPathName[type] + " 합격"
                  : mailTypeListByPathName[type] + " 불합격";
                return <TabBar text={tabTitle} isSelected={index === selectIndex} handler={tabChangeHandler(index)} />;
              })}
          </div>
          <MailForm />
        </div>
      </section>
    </MailFormTemplate>
  );
};

export default MailFormPage;
