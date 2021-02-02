import * as React from "react";
import { useState, useEffect } from "react";
import * as io from "socket.io-client";
import { postMailSend } from "utils/api/email/send/post";
import ObjectArrayTable from "organisms/Table/ObjectArray";
import useDesire from "hooks/useDesire";

import { url } from "../../../../_data";
import { WrapperDiv } from "./EmailFivethGrade.styles";

const EmailFivethGrade = () => {
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
    <WrapperDiv>
      <div>
        <header>
          <span>실시간 전송 확인</span>
        </header>
        <ObjectArrayTable datas={allList} />
      </div>
    </WrapperDiv>
  );
};

export default EmailFivethGrade;
