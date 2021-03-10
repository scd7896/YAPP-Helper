import * as React from "react";
import { useEffect } from "react";
import request from "utils/request";

const Users = () => {
  useEffect(() => {
    request.get("/api/users");
  }, []);
  return <div>users 정보 받아오기</div>;
};

export default Users;
