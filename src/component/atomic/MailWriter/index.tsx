import * as React from "react";
import { useEffect, useState, useCallback } from "react";
import Quill from "react-quill";
import { useSelector, useDispatch } from "react-redux";
import { setMailTextValue } from "../../../store/action/mail";

import "react-quill/dist/quill.snow.css";

const MailWriter = () => {
  const dispatch = useDispatch();
  const { text } = useSelector<RootStore>((state) => state.mail) as MailState;
  const valueCheck = () => {
    console.log(text);
  };
  const handleChange = useCallback((value) => {
    dispatch(setMailTextValue(value));
  }, []);
  return (
    <div>
      <div>
        <Quill value={text} onChange={handleChange} style={{ height: "100px" }} />
      </div>
      <div style={{ marginTop: "200px" }}>
        <button onClick={valueCheck}>값 확인 하기 ㅎㅎ</button>
      </div>
    </div>
  );
};

export default MailWriter;
