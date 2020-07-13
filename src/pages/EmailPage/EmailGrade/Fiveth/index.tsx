import * as React from "react";
import { useState, useEffect, useCallback } from "react";
import * as io from "socket.io-client";
import { url } from "../../../../_data";
import axios from "axios";
import classNames from "classnames/bind";
import styles from "./styles.scss";
import { useSelector } from "react-redux";
import { postMailSend } from "../../../../util/api/email/send/post";
import { useParams } from "react-router-dom";
import ObjectArrayTable from "../../../../component/organisms/Table/ObjectArray";

const cx = classNames.bind(styles);

const EmailGradeFiveth = () => {
  const { type } = useParams();
  const [socket, setSocket] = useState<SocketIOClient.Socket | null>(null);
  const { allList } = useSelector<RootStore, RootStore["desire"]>(({ desire }) => desire);
  const [userData, setUserData] = useState("");
  const getSendStatus = useCallback((isError?: boolean) => {
    if (isError === false) return "발송성공";
    if (isError === true) return "발송실패";
    return "발송중";
  }, []);
  const getPassText = useCallback((isPass: boolean) => {
    if (isPass) return "합격";
    return "불합격";
  }, []);
  useEffect(() => {
    if (socket === null) {
      setSocket(io(url));
    } else {
      socket.on("list-add", (data: any) => {
        setUserData(data);
      });
    }
  }, [socket]);

  useEffect(() => {
    if (userData !== "") {
    }
  }, [userData]);

  return (
    <div className={cx("fiveth-grade-wrapper")}>
      <div className={cx("")}>
        <header>
          <span>실시간 전송 확인</span>
        </header>
        <ObjectArrayTable datas={allList} />
      </div>
    </div>
  );
};

export default EmailGradeFiveth;
