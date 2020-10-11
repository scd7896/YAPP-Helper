import * as React from "react";
import { useCallback } from "react";
import Quill from "react-quill";

import "react-quill/dist/quill.snow.css";

interface MailWriterProps {
  className?: string;
  value?: string;
  setValue: (value: string) => void;
}

const MailWriter = ({ className, value, setValue }: MailWriterProps) => {
  const handleChange = useCallback((value) => {
    if (setValue) {
      setValue(value);
    }
  }, []);

  const dummyText = `
    <br /><br /><br /><br />
    <br /><br /><br /><br />
    <br /><br /><br /><br />
  `;

  return (
    <div className={className ? className : ""}>
      <div>
        <Quill value={value !== "" ? value : dummyText} onChange={handleChange} />
      </div>
      {/* <div style={{ marginTop: "200px" }}>
        <button onClick={valueCheck}>값 확인 하기 ㅎㅎ</button>
      </div> */}
    </div>
  );
};

export default MailWriter;
