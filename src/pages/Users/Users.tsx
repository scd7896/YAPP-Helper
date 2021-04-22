import * as React from "react";
import * as api from "utils/api";
import { useCallback } from "react";
import useUserData from "hooks/ServiceHook/useUserData";
import { NewTable } from "organisms";
import { HeadTitleText } from "@font";
import { NomalButton } from "atomic";
import useModal from "hooks/useModal";
import { EmailInputForm } from "@molecules";
import SelectLayout from "template/SelectLayout/SelectLayout";
import { TableColumn } from "@types";
import { WrapperDiv } from "./Users.styles";

const Users = () => {
  const { userList, deleteUser } = useUserData();
  const { openModal, closeModal } = useModal();
  const columns: Array<TableColumn> = React.useMemo(
    () => [
      { title: "메일주소", dataIndex: "name" },
      { title: "권한부여날짜", dataIndex: "createdAt" },
      { title: "권한", dataIndex: "isAdmin" },
      {
        title: "삭제",
        dataIndex: "delete",
        render: (row, i) => (
          <button
            key={`button${i}`}
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              deleteUser(row);
            }}
          >
            권한 삭제
          </button>
        ),
      },
    ],
    [deleteUser]
  );

  const sendMailSubmit = useCallback(
    async (address: string) => {
      const res = await api.postInvitationSendMail(address);
      if (res.data.payload) {
        alert(res.data.payload);
        closeModal();
      }
    },
    [closeModal]
  );

  const clickListner = useCallback(() => {
    openModal(() => <EmailInputForm onSubmit={sendMailSubmit} />);
  }, [openModal, sendMailSubmit]);
  return (
    <SelectLayout>
      <WrapperDiv>
        <HeadTitleText>유저 정보 보기</HeadTitleText>
        <NomalButton color="default" size="default" onClick={clickListner}>
          권한 초대하기
        </NomalButton>
      </WrapperDiv>
      <div>
        {userList && (
          <NewTable
            selectOption={false}
            column={columns}
            dataSource={userList}
            onRowClick={(object) => console.log(object)}
          />
        )}
      </div>
    </SelectLayout>
  );
};

export default Users;
