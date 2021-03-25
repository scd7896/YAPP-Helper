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
import SelectLayout from "template/SelectLayout/SelectLayout";

const Users = () => {
  const { userList } = useUserData();
  const { openModal, closeModal } = useModal();

  const sendMailSubmit = useCallback(async (address: string) => {
    const res = await api.postInvitationSendMail(address);
    if (res.data.payload) {
      alert(res.data.payload);
      closeModal();
    }
  }, []);

  const clickListner = useCallback(() => {
    openModal(() => <EmailInputForm onSubmit={sendMailSubmit} />);
  }, []);
  return (
    <SelectLayout>
      <WrapperDiv>
        <HeadTitleText>유저 정보 보기</HeadTitleText>
        <NomalButton color="default" size="default" onClick={clickListner}>
          권한 초대하기
        </NomalButton>
      </WrapperDiv>
      {userList && <NormalTable items={userList} />}
    </SelectLayout>
  );
};

export default Users;
