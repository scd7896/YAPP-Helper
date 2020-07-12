import * as React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserDataByFormRequest } from "../../../../store/action/desire";
import ClickHeadTh from "../../../../component/atomic/Table/ClickHeadTh";
import { Link, useParams } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./styles.scss";
import useHisotryRoute from "../../../../hooks/useHistoryRoute";
import NomalButton from "../../../../component/atomic/Button/NomalButton";

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
      <table className={cx("table-style")}>
        <thead>
          <tr className={cx("table-row-style")}>
            {keys.map((key, index) => {
              return (
                <ClickHeadTh key={`${key}${index}`} index={index}>
                  {key as string}
                </ClickHeadTh>
              );
            })}
          </tr>
        </thead>

        <tbody className={cx("tbody-wrapper")}>
          {users.map((user, index) => {
            return (
              <tr className={cx("table-row-style")} key={`user${user}${index}`}>
                {user.map((userData, j) => {
                  return (
                    <td className={cx("table-data-style")} key={`datas${userData}${j}`}>
                      <span>{userData}</span>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
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
