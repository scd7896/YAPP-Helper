import * as React from "react";
import { useState, useEffect, useCallback } from "react";
import * as io from "socket.io-client";
import { url } from "../../../../_data";
import axios from "axios";
import classNames from "classnames/bind";
import styles from "./styles.scss";
import { useSelector, useDispatch } from "react-redux";
import { postMailSend } from "../../../../utils/api/email/send/post";
import { useParams } from "react-router-dom";
import ObjectArrayTable from "../../../../component/organisms/Table/ObjectArray";
import { mailSendResultSet } from "../../../../store/action/desire";

const cx = classNames.bind(styles);

const EmailGradeFiveth = () => {
  const dispatch = useDispatch();
  const { type } = useParams();
  const [socket, setSocket] = useState<SocketIOClient.Socket | null>(null);
  const { allList } = useSelector<RootStore, RootStore["desire"]>(({ desire }) => desire);
  const [userData, setUserData] = useState("");
  const [keyString, setKeyString] = useState("");

  useEffect(() => {
    if (socket === null) {
      setSocket(io(url));
    } else {
      socket.on("list-add", (data: SendUserResult) => {
        dispatch(mailSendResultSet(data));
      });
      socket.on("send-key", (key: string) => {
        setKeyString(key);
      });
    }
  }, [socket]);
  useEffect(() => {
    postMailSend({ users: allList, type: type });
  }, []);
  useEffect(() => {
    console.log(keyString);
  }, [keyString]);

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
