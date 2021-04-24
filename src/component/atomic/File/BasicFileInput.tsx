import { ExelFileIcon, ExelUploadCompleteIcon } from "atomic/Icon";
import * as React from "react";
import {
  DropBoxButtonSpan,
  DropBoxGuideTextSpan,
  FileDropBoxDiv,
  FileNameTextSpan,
  IconMarginDiv,
  OrSpan,
} from "./Input/ExelFileInput.styles";

interface IProp {
  name: string;
  accept?: string;
  required?: boolean;
}

export default function BasicFileInput({ name, accept, required }: IProp) {
  const [isOver, setIsOver] = React.useState(false);
  const [fileName, setFileName] = React.useState<string>();
  const inputRef = React.useRef<HTMLInputElement>();

  const dropHandler = React.useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    if (event.dataTransfer.files.length) {
      console.log(event.dataTransfer.files);
      inputRef.current.files = event.dataTransfer.files;
      setFileName(event.dataTransfer.files.item(0).name);
    }
  }, []);

  const dragOverHandler = React.useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (isOver) return;
    setIsOver(true);
  }, []);

  const dragLeaveHandler = React.useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (!isOver) return;
    setIsOver(false);
  }, []);

  const clickForExcelCall = React.useCallback(() => {
    inputRef.current.click();
  }, []);

  const inputChangeListener = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setFileName(e.target.files.item(0).name);
  }, []);

  return (
    <FileDropBoxDiv
      onDrop={dropHandler}
      onDragOver={dragOverHandler}
      onDragLeave={dragLeaveHandler}
      isUploaded={fileName}
      isOver={isOver}
    >
      <IconMarginDiv>{fileName ? <ExelUploadCompleteIcon /> : <ExelFileIcon />}</IconMarginDiv>
      <DropBoxGuideTextSpan isUploaded={fileName}>
        {fileName ? (
          <>
            <FileNameTextSpan>{fileName}</FileNameTextSpan> 업로드 완료!
          </>
        ) : (
          "엑셀파일을 이곳에 끌어다 놓으세요"
        )}
      </DropBoxGuideTextSpan>
      {!fileName && <OrSpan>또는</OrSpan>}
      <DropBoxButtonSpan onClick={clickForExcelCall}>{fileName ? "파일 수정하기" : "파일 불러오기"}</DropBoxButtonSpan>
      <input
        onChange={inputChangeListener}
        ref={inputRef}
        name={name}
        type="file"
        style={{ display: "none" }}
        accept={accept}
        required={required}
      />
    </FileDropBoxDiv>
  );
}
