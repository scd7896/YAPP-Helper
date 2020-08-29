import * as React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserDataByFormRequest } from "actions/desire";
import classNames from "classnames/bind";
import styles from "./styles.scss";
import useHisotryRoute from "hooks/useHistoryRoute";
import NomalButton from "atomic/Button/NomalButton";
import Table from "organisms/Table";
import useDesire from "hooks/useDesire";

const cx = classNames.bind(styles);
const EmailGradeSecond = () => {
  const dispatch = useDispatch();
  const { pushHistory } = useHisotryRoute();
  const {
    desireState: { keys, users },
  } = useDesire();

  useEffect(() => {
    dispatch(setUserDataByFormRequest());
  }, []);

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
