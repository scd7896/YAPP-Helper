import request from "utils/request";

export const getMailFormAll = async () => {
  const res = await request.get("/api/mailforms");
  const data = res.data;
  const dataList = data.map((mailForm: any) => {
    return {
      id: mailForm.id,
      title: mailForm.title,
      text: mailForm.contents,
      headImageURL: mailForm.header_image,
      subImageURL: mailForm.map_image,
      type: mailForm.type,
      pass: mailForm.pass,
    };
  });

  return dataList;
};
