import request from "utils/request";

export const postInvitation = (token) => request.post("/api/invitation", { body: { token } });
