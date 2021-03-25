import * as React from "react";
import useUserData from "hooks/ServiceHook/useUserData";
import { NormalTable } from "organisms";
import { HeadTitleText } from "@font";

const Users = () => {
  const { userList } = useUserData();
  return (
    <div>
      <HeadTitleText>유저 정보 보기</HeadTitleText>
      {userList && <NormalTable items={userList} />}
    </div>
  );
};

export default Users;
