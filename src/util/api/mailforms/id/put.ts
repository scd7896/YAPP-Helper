import axios from "axios";

export const putMailForm = async (payload: MailInputState) => {
  const formData = new FormData();
  if (payload.headImage) {
    formData.append("header_image", payload.headImage);
  }
  if (payload.subImage) {
    formData.append("map_image", payload.subImage);
  }
  formData.append("type", payload.type);
  formData.append("title", payload.title);
  formData.append("contents", payload.text);

  const res = await axios.put(`/api/mailforms/${payload.id}`, formData);

  return res.data;
};
