import { CertifiCate } from "@prisma/client";
import { Certificate } from "./index";

export const getAllList = async () => {
  const res = await Certificate.findMany();
  return res;
};

export const findByTitle = async ({ title }) => {
  const res = await Certificate.findMany({
    where: {
      title,
    },
  });

  return res;
};

export const addCertificates = async ({
  contents,
  title,
  subTitle,
  backgroundImage,
}: Omit<CertifiCate, "id" | "createdAt" | "updatedAt">) => {
  const res = await Certificate.create({
    data: {
      contents,
      title,
      subTitle,
      backgroundImage,
    },
  });
  return res;
};
