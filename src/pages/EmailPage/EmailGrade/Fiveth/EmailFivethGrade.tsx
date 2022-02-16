import * as React from "react";
import { useState, useEffect } from "react";
import * as io from "socket.io-client";

import { postMailSend } from "utils/api/email/send/post";
import ObjectArrayTable from "organisms/Table/ObjectArray/ObjectArrayTable";
import useDesire from "hooks/useDesire";
import { SendUserResult } from "@types";
import { EmailGradeSubTitleSpan, EmailGradeTitleSpan } from "@font";

import { url } from "../../../../_data";
import { WrapperDiv, TitleHeaderWrapper } from "./EmailFivethGrade.styles";

const EmailFivethGrade = () => {
  const canRequest = React.useRef(true);
  const [socket, setSocket] = useState<SocketIOClient.Socket | null>(null);
  const {
    desireState: { allList },
    mailResultSetData,
  } = useDesire();
  const [keyString, setKeyString] = useState("");

  useEffect(() => {
    setSocket(io(url));
  }, []);

  useEffect(() => {
    return () => {
      socket?.close();
    }
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on("list-add", (data: SendUserResult) => {
        mailResultSetData(data);
      });
      socket.on("send-key", (key: string) => {
        setKeyString(key);
      });
      socket.on("close", () => {
        console.log("closed")
        socket.close();
        setSocket(null);
      })
    }
  }, [socket, mailResultSetData]);

  useEffect(() => {
    if (canRequest.current) {
      postMailSend({ users: allList });
      canRequest.current = false;
    }
  }, [allList]);

  return (
    <WrapperDiv>
      <div>
        <TitleHeaderWrapper>
          <EmailGradeTitleSpan style={{ marginBottom: "14px" }}>5.실시간 전송 확인</EmailGradeTitleSpan>
          <EmailGradeSubTitleSpan>📮메일을 실시간으로 전송하고 있어요!</EmailGradeSubTitleSpan>
        </TitleHeaderWrapper>
        <ObjectArrayTable datas={allList} />
      </div>
    </WrapperDiv>
  );
};

export default React.memo(EmailFivethGrade);
