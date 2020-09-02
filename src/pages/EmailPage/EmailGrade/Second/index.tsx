import * as React from "react";
import { useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./styles.scss";
import useHisotryRoute from "hooks/useHistoryRoute";
import NomalButton from "atomic/Button/NomalButton";
import Table from "organisms/Table";
import useDesire from "hooks/useDesire";

const cx = classNames.bind(styles);
const EmailGradeSecond = () => {
  const { pushHistory } = useHisotryRoute();
  const {
    desireState: { keys, users },
    setUserData,
  } = useDesire();

  useEffect(() => {
    setUserData();
  }, [setUserData]);

  return (
    <div className={cx("table-wrapper")}>
      <Table headItems={keys} bodyItems={users} />
      <footer className={cx("inner-grade-footer")}>
        <NomalButton
          color="lightBlue"
          size="default"
          onClick={() => {
            pushHistory(`/email/1`);
          }}
        >
          이전
        </NomalButton>
        <NomalButton
          color="default"
          size="default"
          onClick={() => {
            pushHistory(`/email/3`);
          }}
        >
          다음
        </NomalButton>
      </footer>
    </div>
  );
};
export default EmailGradeSecond;
