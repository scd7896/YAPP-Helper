import request from "utils/request";

export const getUserData = () => request.get("/api/users");
