import request from "utils/request";

export const postInvitationSendMail = (mail) => request.post("/api/invitation/send", { body: { mail } });
