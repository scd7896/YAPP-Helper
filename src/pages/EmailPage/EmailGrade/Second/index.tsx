import * as React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserDataByFormRequest } from "../../../../store/action/desire";

import { useParams } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./styles.scss";
import useHisotryRoute from "../../../../hooks/useHistoryRoute";
import NomalButton from "../../../../component/atomic/Button/NomalButton";
import Table from "../../../../component/organisms/Table";

const cx = classNames.bind(styles);
const EmailGradeSecond = () => {
  const dispatch = useDispatch();
  const { pushHistory } = useHisotryRoute();
  const { type } = useParams() as { type: string };
  const { keys, users } = useSelector<RootStore>((state) => state.desire) as DesireState;

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
            pushHistory(`/email/${type}/1`);
          }}
        >
          이전
        </NomalButton>
        <NomalButton
          color="default"
          size="default"
          onClick={() => {
            pushHistory(`/email/${type}/3`);
          }}
        >
          다음
        </NomalButton>
      </footer>
    </div>
  );
};
export default EmailGradeSecond;
