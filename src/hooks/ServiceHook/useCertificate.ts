import { CertifiCateModel } from "@cmodel";
import { CertifiCate } from "@prisma/client";
import { useCallback, useState } from "react";

export default function useCertificate() {
  const [certificateList, setCertificateList] = useState<Array<Pick<CertifiCate, "id" | "title">>>([]);

  const requestCertificateList = useCallback(async () => {
    const res = await CertifiCateModel.getAllTitleList();
    setCertificateList(res.payload);
  }, []);

  return {
    certificateList,
    requestCertificateList,
  };
}
