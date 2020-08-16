import request from "utils/request";

export const putRecruitData = async (payload: IRecruit) => {
  const res = await request.put("/api/recruit", { body: payload });
  return res.data;
};
