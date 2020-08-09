import * as React from "react";
import { useCallback, useEffect, useState } from "react";
import RecruitGuide from "../../molecules/RecruitGuide";
import OpenTrueBody from "./OpenTrueBody";
import OpenFalseBody from "./OpenFalseBody";
import { putRecruitData } from "../../../util/api";
import { useHistory } from "react-router-dom";
import NomalButton from "../../atomic/Button/NomalButton";
import classNames from "classnames/bind";
import styles from "./styles.scss";

// Hooks
import useRecruit from "../../../hooks/recruit";

const cx = classNames.bind(styles);

const RecruitInputContainer = () => {
  const recruit = useRecruit();
  const history = useHistory();
  const [isUpdateSuccess, setIsUpdateSuccess] = useState(false);
  const recruitDataUpdate = useCallback(async () => {
    try {
      await putRecruitData({
        generation: parseInt(recruit.generation.toString(), 10),
        url: recruit.URL,
        isRecruit: recruit.isRecruiting,
        startDay: recruit.startDay,
        lastDay: recruit.lastDay,
      });
      setIsUpdateSuccess(true);
    } catch (err) {
      setIsUpdateSuccess(false);
    }
  }, [recruit.isRecruiting, recruit.generation, recruit.URL, recruit.startDay, recruit.lastDay]);

  useEffect(() => {
    if (isUpdateSuccess) {
      alert("성공적으로 반영하였습니다.");
      history.push("/select");
    }
  }, [isUpdateSuccess]);
  return (
    <div className={cx("recruit-input-container")}>
      <header className={cx("recruit-input-header")}>
        <RecruitGuide type="checked" name="isRecruiting" title="리쿠르팅 오픈하기" />
      </header>
      {recruit.isRecruiting ? <OpenTrueBody /> : <OpenFalseBody />}
      <footer className={cx("recruit-input-footer")}>
        <NomalButton color="ghost" size="small">
          취소
        </NomalButton>
        <NomalButton color="default" size="small" onClick={recruitDataUpdate}>
          완료
        </NomalButton>
      </footer>
    </div>
  );
};

export default RecruitInputContainer;
