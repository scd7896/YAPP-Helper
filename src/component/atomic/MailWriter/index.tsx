import * as React from "react";
import { useCallback } from "react";
import ReactQuill, { Quill } from "react-quill";

import "react-quill/dist/quill.snow.css";

interface MailWriterProps {
  className?: string;
  value?: string;
  setValue?: (value: string) => void;
  name?: string;
  required?: boolean;
}
const toolbarOptions = [
  ["bold", "italic", "underline", "strike"], // toggled buttons
  ["blockquote", "code-block"],

  [{ header: 1 }, { header: 2 }], // custom button values
  [{ list: "ordered" }, { list: "bullet" }],
  [{ script: "sub" }, { script: "super" }], // superscript/subscript
  [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
  [{ direction: "rtl" }], // text direction

  [{ size: [false, "small", "large", "huge"] }], // custom dropdown

  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  [{ align: [] }],

  ["clean"],
];
const quillModules = {
  toolbar: toolbarOptions,
};

const MailWriter = ({ className, value, setValue, name, required }: MailWriterProps) => {
  const textAreaRef = React.useRef<HTMLTextAreaElement>();
  const handleChange = useCallback(
    (nextValue) => {
      if (setValue) {
        setValue(nextValue);
      }
      if (textAreaRef.current) textAreaRef.current.value = nextValue;
    },
    [setValue]
  );

  const dummyText = `
    <br /><br /><br /><br />
    <br /><br /><br /><br />
    <br /><br /><br /><br />
  `;

  return (
    <div className={className || ""}>
      <div>
        <ReactQuill modules={quillModules} value={value !== "" ? value : dummyText} onChange={handleChange} />
      </div>
      <textarea required={required} ref={textAreaRef} name={name} style={{ display: "none" }} defaultValue={value} />
    </div>
  );
};

export default MailWriter;
