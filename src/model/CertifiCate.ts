import { CertifiCate as CertifiCateModel } from "@prisma/client";
import request from "utils/request";

interface PostCertificate extends Omit<CertifiCateModel, "id" | "createdAt" | "updatedAt" | "backgroundImage"> {
  backgroundImage: File | Blob;
}
class CertifiCate {
  private static _instance: CertifiCate;

  private constructor() {}

  public static get Instance() {
    return this._instance || (this._instance = new this());
  }

  async getAllTitleList() {
    const res = await request.get("/api/certificate");
    return res.data;
  }

  async getFindById(id: number) {
    const res = await request.get(`/api/certificate/${id}`);
    return res.data;
  }

  async getFindByTitle(title: string) {
    const res = await request.get("/api/certificate/title", { title });
    return res.data;
  }

  async postCertificates(param: PostCertificate) {
    const res = await request.post("/api/certificate", { body: param });
    return res.data;
  }
}

export default CertifiCate.Instance;
