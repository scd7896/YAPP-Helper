import { CertifiCateModel } from "@cmodel";
import { CertifiCate } from "@prisma/client";
import { useCallback, useState } from "react";

export default function useCertificate() {
  const [certificateList, setCertificateList] = useState<Array<Pick<CertifiCate, "id" | "title">>>([]);
  const [certificate, setCertificate] = useState<CertifiCate>();

  const requestCertificateList = useCallback(async () => {
    const res = await CertifiCateModel.getAllTitleList();
    setCertificateList(res.payload);
  }, []);

  const requestCertificateDetail = useCallback(async (id: number) => {
    const res = await CertifiCateModel.getFindById(id);
    setCertificate(res.payload);
  }, []);

  const changeCertificate = useCallback(async (id: number, param) => {
    const res = await CertifiCateModel.putCertificate(id, param);
    return res;
  }, []);

  const createCertificate = useCallback(async (param) => {
    const res = await CertifiCateModel.postCertificates(param);
    return res;
  }, []);

  return {
    certificateList,
    requestCertificateList,
    certificate,
    requestCertificateDetail,
    changeCertificate,
    createCertificate,
  };
}
