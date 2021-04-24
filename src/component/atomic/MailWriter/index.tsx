import * as React from "react";
import { useCallback } from "react";
import Quill from "react-quill";

import "react-quill/dist/quill.snow.css";

interface MailWriterProps {
  className?: string;
  value?: string;
  setValue?: (value: string) => void;
  name?: string;
  required?: boolean;
}

const MailWriter = ({ className, value, setValue, name, required }: MailWriterProps) => {
  const textAreaRef = React.useRef<HTMLTextAreaElement>();
  const handleChange = useCallback((value) => {
    if (setValue) {
      setValue(value);
    }
    textAreaRef.current.value = value;
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
      <textarea required={required} ref={textAreaRef} name={name} style={{ display: "none" }}></textarea>
    </div>
  );
};

export default MailWriter;
