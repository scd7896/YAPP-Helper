import { useCallback, useEffect, useState } from "react";
import * as api from "utils/api";
import { UserViewModel } from "src/types";

export default function useUserData() {
  const [userList, setUserList] = useState<UserViewModel[] | null>(null);

  const requestUserList = useCallback(async () => {
    const res = await api.getUserData();
    const viewModel = res.data.data.map((user) => ({
      name: user.name,
      createdAt: user.createdAt.substring(0, 10),
      isAdmin: user.isAdmin ? "관리자" : "일반",
      id: user.id,
    }));
    console.log(viewModel);
    setUserList(viewModel);
  }, []);

  useEffect(() => {
    requestUserList();
  }, [requestUserList]);

  return {
    userList,
  };
}
