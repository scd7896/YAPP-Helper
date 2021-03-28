import request from "utils/request";

interface ICertificateSend {
  email: string;
  title: string;
  contents: string;
  certifiCate: File;
}
//
export const postCertifiCateSend = ({ email, title, contents, certifiCate }: ICertificateSend) => {
  const formData = new FormData();

  return;
};
