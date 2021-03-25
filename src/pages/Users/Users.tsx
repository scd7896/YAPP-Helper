import * as React from "react";
import * as api from "utils/api";
import { useCallback } from "react";
import useUserData from "hooks/ServiceHook/useUserData";
import { NormalTable } from "organisms";
import { HeadTitleText } from "@font";
import { NomalButton } from "atomic";
import useModal from "hooks/useModal";
import { WrapperDiv } from "./Users.styles";
import { EmailInputForm } from "@molecules";

const Users = () => {
  const { userList } = useUserData();
  const { openModal } = useModal();

  const sendMailSubmit = useCallback((address: string) => {
    api.postInvitationSendMail(address);
  }, []);

  const clickListner = useCallback(() => {
    openModal(() => <EmailInputForm onSubmit={sendMailSubmit} />);
  }, []);
  return (
    <div>
      <WrapperDiv>
        <HeadTitleText>유저 정보 보기</HeadTitleText>
        <NomalButton color="default" size="default" onClick={clickListner}>
          유저한테 보내기
        </NomalButton>
      </WrapperDiv>
      {userList && <NormalTable items={userList} />}
    </div>
  );
};

export default Users;
