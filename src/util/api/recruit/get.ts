import axios from "axios";

export const getRecruitData = async (): Promise<RecruitModel> => {
  const res = await axios.get(`/api/recruit`);
  const data = res.data["recruit-data"];
  return {
    generation: data.generation,
    isRecruiting: data.isRecruit,
    lastDay: data.lastDay,
    startDay: data.startDay,
    URL: data.url,
  };
};
