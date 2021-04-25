import { useCallback, useEffect, useState } from "react";
import * as api from "utils/api";
import { UserViewModel } from "src/types";
import { UserModel } from "@cmodel";

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
    setUserList(viewModel);
  }, []);

  const deleteUser = useCallback(
    async (user: UserViewModel) => {
      if (user.isAdmin) {
        alert("관리자는 지울 수 없습니다");
        return;
      }
      if (window.confirm(`${user.name}님을 삭제 하시겠습니까?`)) {
        await UserModel.deleteUser(user.id);
        alert("유저가 삭제 되었습니다.");
        requestUserList();
      }
    },
    [requestUserList]
  );

  useEffect(() => {
    requestUserList();
  }, [requestUserList]);

  return {
    userList,
    deleteUser,
  };
}
