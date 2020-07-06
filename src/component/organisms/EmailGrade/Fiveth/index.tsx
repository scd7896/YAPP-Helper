import * as React from "react";
import { useState, useEffect, useCallback } from "react";
import * as io from "socket.io-client";
import { url } from "../../../../_data";
import axios from "axios";
import classNames from "classnames/bind";
import styles from "./styles.scss";

const cx = classNames.bind(styles);

const EmailGradeFiveth = () => {
  const [socket, setSocket] = useState<SocketIOClient.Socket | null>(null);
  const [userDatas, setUserDatas] = useState([]);
  const [userData, setUserData] = useState("");

  useEffect(() => {
    setSocket(io(url));
  }, []);

  useEffect(() => {
    if (socket !== null) {
      axios.get(`${url}/api/email/test`);
      socket.on("list-add", (data: string) => {
        setUserData(data);
      });
    }
  }, [socket]);

  useEffect(() => {
    if (userData !== "") {
      setUserDatas([...userDatas, userData]);
    }
  }, [userData]);

  return (
    <div className={cx("fiveth-grade-wrapper")}>
      <div className={cx("")}>
        <header>
          <span>실시간 전송 확인</span>
        </header>
        <div className={cx("userResultTable")}>
          <header className={cx("tableHeader")}>
            <span>지원자 이름</span>
            <span>이메일</span>
            <span>평과결과</span>
            <span>면접시간</span>
            <span>전송여부</span>
          </header>
          <section>
            {userDatas.map((user) => {
              return (
                <div className={cx("tableBody")}>
                  <span>user.name</span>
                  <span>user.email</span>
                  <span>user.isPass</span>
                  <span>user.meettingTime</span>
                  <span>user.sendResult</span>
                </div>
              );
            })}
          </section>
        </div>
      </div>
    </div>
  );
};

export default EmailGradeFiveth;