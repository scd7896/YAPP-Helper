import axios from "axios";
export const getMailFormById = async (id: number) => {
  const res = await axios.get(`/api/mailforms/${id}`);
  const data = res.data;
  const mailFormObject = {
    id: data.id,
    title: data.title,
    text: data.contents,
    headImageURL: data.header_image,
    subImageURL: data.map_image,
    type: data.type,
  };
  return mailFormObject;
};
