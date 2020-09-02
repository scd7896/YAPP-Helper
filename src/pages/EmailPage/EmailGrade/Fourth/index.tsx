import * as React from "react";
import { useState, useEffect, useMemo } from "react";
import classNames from "classnames/bind";
import styles from "./styles.scss";
import NomalButton from "atomic/Button/NomalButton";
import useHisotryRoute from "hooks/useHistoryRoute";
import useDesire from "hooks/useDesire";
const cx = classNames.bind(styles);

const Fourth = () => {
  const { pushHistory } = useHisotryRoute();

  const [viewPage, setViewPage] = useState<boolean>(true);

  const {
    desireState: { mailTemplates },
    mailTemplatesListFetch,
  } = useDesire();

  const clickHeaderTab = (target: boolean) => () => {
    setViewPage(target);
  };

  const targetIndex = useMemo<number>(() => {
    if (viewPage) {
      return 0;
    } else {
      return 1;
    }
  }, [viewPage]);

  useEffect(() => {
    if (mailTemplates === null) {
      mailTemplatesListFetch();
    }
  }, [mailTemplates, mailTemplatesListFetch]);

  return (
    <section className={cx("page-wrapper")}>
      <p>4.메일내용 확인</p>
      <p>잠깐! 보내기 전에 메일내용 확인하세요</p>
      <section className={cx("content-wrapper")}>
        <header>
          <span className={cx("head-nav-button", { selected: viewPage })} onClick={clickHeaderTab(true)}>
            합격
          </span>
          <span className={cx("head-nav-button", { selected: !viewPage })} onClick={clickHeaderTab(false)}>
            불합격
          </span>
        </header>
        {mailTemplates !== null && (
          <section className={cx("body")}>
            <article>
              <p>메일제목 | {mailTemplates[targetIndex].title}</p>
            </article>
            <article>
              <p>헤더이미지</p>
              <picture>
                <img width="100%" height="150px" src={mailTemplates[targetIndex].headImageURL} />
              </picture>
            </article>
            <article>
              <p>메일내용</p>
              <div dangerouslySetInnerHTML={{ __html: mailTemplates[targetIndex].text }} />
            </article>
            <article>
              <p>첨부파일</p>
              <div>
                {mailTemplates[targetIndex].subImageURL} <span>파일미리보기</span>
              </div>
            </article>
            <article>
              <button>수정 하기</button>
            </article>
          </section>
        )}
      </section>

      <footer className="inner-grade-footer">
        <NomalButton
          color="lightBlue"
          size="default"
          onClick={() => {
            pushHistory(`/email/3`);
          }}
        >
          이전
        </NomalButton>
        <NomalButton
          color="default"
          size="default"
          onClick={() => {
            pushHistory(`/email/5`);
          }}
        >
          다음
        </NomalButton>
      </footer>
    </section>
  );
};

export default Fourth;
