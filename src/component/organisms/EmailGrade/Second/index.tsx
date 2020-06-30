import * as React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserDataByFormRequest } from "../../../../store/action/desire";
import ClickHeadTh from "../../../atomic/Table/ClickHeadTh";
import { Link, useParams } from "react-router-dom";

import "./styles.scss";

const EmailGradeSecond = () => {
  const dispatch = useDispatch();
  const { type } = useParams() as { type: string };
  const { keys, users } = useSelector<RootStore>((state) => state.desire) as DesireState;

  useEffect(() => {
    dispatch(setUserDataByFormRequest());
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            {keys.map((key, index) => {
              return (
                <ClickHeadTh key={`${key}${index}`} index={index}>
                  {key as string}
                </ClickHeadTh>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={`user${user}${index}`}>
                {user.map((userData, j) => {
                  return <td key={`datas${userData}${j}`}>{userData}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <footer className="inner-grade-footer">
        <Link to={`/email/${type}/1`}>이전</Link>
        <Link to={`/email/${type}/3`}>다음</Link>
      </footer>
    </div>
  );
};
export default EmailGradeSecond;
