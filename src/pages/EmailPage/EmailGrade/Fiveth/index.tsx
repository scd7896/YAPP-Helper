import * as React from "react";
import { useState, useEffect } from "react";
import * as io from "socket.io-client";
import { url } from "../../../../_data";
import classNames from "classnames/bind";
import styles from "./styles.scss";
import { postMailSend } from "utils/api/email/send/post";
import ObjectArrayTable from "organisms/Table/ObjectArray";

import useDesire from "hooks/useDesire";

const cx = classNames.bind(styles);

const EmailGradeFiveth = () => {
  const [socket, setSocket] = useState<SocketIOClient.Socket | null>(null);
  const {
    desireState: { allList },
    mailResultSetData,
  } = useDesire();
  const [keyString, setKeyString] = useState("");

  useEffect(() => {
    if (socket === null) {
      setSocket(io(url));
    } else {
      socket.on("list-add", (data: SendUserResult) => {
        mailResultSetData(data);
      });
      socket.on("send-key", (key: string) => {
        setKeyString(key);
      });
    }
  }, [socket]);
  useEffect(() => {
    postMailSend({ users: allList });
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
