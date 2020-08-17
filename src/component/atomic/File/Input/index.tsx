import * as React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setExcelValueRequset } from "actions/desire";
import SmallIconWrapper from "../../IconWrapper/Small";
import classNames from "classnames/bind";
import styles from "./styles.scss";

interface IProp {
  fileName?: string;
}
const cx = classNames.bind(styles);
const FileInput: React.FC<IProp> = ({ fileName }) => {
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
    <div
      onDrop={drapHandler}
      onDragOver={dragOverHandler}
      onDragLeave={dragLeaveHandler}
      className={cx("file-drop-box", { isUploaded: fileName })}
      style={isOver ? { backgroundColor: "rgba(228, 230, 240, 0.5)" } : {}}
    >
      <div className={cx("margin-bottom18px-wrapper")}>
        <SmallIconWrapper width={70} height={70} />
      </div>
      <span className={cx("drop-box-guide-text", { isUploaded: fileName })}>
        {fileName ? (
          <>
            <span className={cx("filename-text")}>{fileName}</span> 업로드 완료!
          </>
        ) : (
          "파일을 이곳에 끌어다 놓으세요"
        )}
      </span>
      {!fileName && <span className={cx("or")}>또는</span>}
      <span className={cx("drop-box-file-button")} onClick={clickForExcelCall}>
        {fileName ? "파일 수정하기" : "파일 불러오기"}
      </span>
    </div>
  );
};

export default FileInput;
