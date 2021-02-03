import * as React from "react";
import { useEffect, useState } from "react";
import * as io from "socket.io-client";

import SelectMailTemplate from "template/SelectMailTemplate";
import SelectLayout from "template/SelectLayout";

const SelectMailType = () => {
  const [socket, setSocket] = useState<SocketIOClient.Socket | null>(null);
  useEffect(() => {
    setSocket(io("http://helper.yapp.co.kr:9170/"));
  }, []);

  useEffect(() => {
    if (socket !== null) {
      /**
       * todo: store의 데이터를 읽어서 내용들을 reuqst를 던지자
       */
      socket.on("list-add", (data: User) => {
        console.log(data);
      });
    }
  }, [socket]);
  return (
    <div>
      <SelectLayout>
        <SelectMailTemplate />
      </SelectLayout>
    </div>
  );
};

export default SelectMailType;
