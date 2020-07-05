import * as React from "react";
import { useCallback, useEffect, useState } from "react";
import RecruitGuide from "../../molecules/RecruitGuide";
import { useSelector } from "react-redux";
import OpenTrueBody from "./OpenTrueBody";
import OpenFalseBody from "./OpenFalseBody";
import { putRecruitData } from "../../../util/api";
import { useHistory } from "react-router-dom";
import NomalButton from "../../atomic/Button/NomalButton";
import classNames from "classnames/bind";
import styles from "./styles.scss";
const cx = classNames.bind(styles);

const RecruitInputContainer = () => {
  const { isRecruiting, generation, URL, startDay, lastDay } = useSelector<RootStore>(
    (state) => state.recruit
  ) as RecruitState;
  const history = useHistory();
  const [isUpdateSuccess, setIsUpdateSuccess] = useState(false);
  const recruitDataUpdate = useCallback(async () => {
    try {
      await putRecruitData({
        generation: parseInt(generation.toString(), 10),
        url: URL,
        isRecruit: isRecruiting,
        startDay,
        lastDay,
      });
      setIsUpdateSuccess(true);
    } catch (err) {
      setIsUpdateSuccess(false);
    }
  }, [isRecruiting, generation, URL, startDay, lastDay]);

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
      {isRecruiting ? <OpenTrueBody /> : <OpenFalseBody />}
      <footer className={cx("recruit-input-footer")}>
        <NomalButton color="grayOutLine" size="small">
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
