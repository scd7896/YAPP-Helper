import * as React from "react";
import useUserData from "hooks/ServiceHook/useUserData";
import { NormalTable } from "organisms";

const Users = () => {
  const { userList } = useUserData();
  return <div> {userList && <NormalTable items={userList} />}</div>;
};

export default Users;
