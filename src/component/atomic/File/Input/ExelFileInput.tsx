import * as React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setExcelValueRequset } from "actions/desire";

import {
  DropBoxGuideTextSpan,
  FileDropBoxDiv,
  FileNameTextSpan,
  IconMarginDiv,
  OrSpan,
  DropBoxButtonSpan,
} from "./ExelFileInput.styles";
import { ExelFileIcon, ExelUploadCompleteIcon } from "../../Icon";
import { RootStore } from "@types";

interface IProp {
  fileName?: string;
}

const ExelFileInput: React.FC<IProp> = ({ fileName }) => {
  const [isOver, setIsOver] = useState(false);
  const isError = useSelector<RootStore>((state) => state.desire.isError);
  const dispatch = useDispatch();
  const drapHandler = async (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    if (event.dataTransfer.items) {
      const excelFile = event.dataTransfer.items[0].getAsFile();
      dispatch(setExcelValueRequset(excelFile));
      setIsOver(false);
    }
  };

  const dragOverHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (isOver) return;
    setIsOver(true);
  };

  const dragLeaveHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (!isOver) return;
    setIsOver(false);
  };

  const clickForExcelCall = () => {
    const inputTag = document.createElement("input");
    inputTag.setAttribute("type", "file");
    inputTag.setAttribute("accept", ".xlsx");
    inputTag.addEventListener("change", (event) => {
      dispatch(setExcelValueRequset(inputTag.files[0]));
    });
    inputTag.click();
  };

  useEffect(() => {
    if (isError) {
      alert(".xlsx파일만 업로드 할 수 있습니다.");
    }
  }, [isError]);
  return (
    <FileDropBoxDiv
      onDrop={drapHandler}
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
    </FileDropBoxDiv>
  );
};

export default ExelFileInput;
