import * as React from "react";
import { useEffect, useCallback } from "react";
import useQueryObject from "hooks/useQueryObject";
import { useHistory as useHistoryDI } from "react-router-dom";
import * as api from "utils/api";
import { setCookie } from "utils/cookie";

const Invitation = ({ useHistory = useHistoryDI }) => {
  const { replace } = useHistory();
  const { query } = useQueryObject({});

  const invitationUser = useCallback(async () => {
    const res = await api.postInvitation(query.token);
    if (res.data.token) {
      setCookie("token", res.data.token, 1);
      alert("가입이 완료 되었습니다.");
      replace("/select");
    }
  }, [query]);

  useEffect(() => {
    invitationUser();
  }, []);
  return <div>메일 초대 수락하는 페이지</div>;
};

export default Invitation;
