import { CertifiCate } from "@prisma/client";
import { Certificate } from "./index";

export const getAllList = async () => {
  const res = await Certificate.findMany({
    select: {
      id: true,
      title: true,
    },
  });
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
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });
  return res;
};

export const findCertificateById = async (id: number) => {
  const res = await Certificate.findUnique({
    where: {
      id,
    },
  });

  return res;
};

export const changeCertificate = async (id: number, param: Omit<CertifiCate, "createdAt" | "updatedAt">) => {
  const res = await Certificate.update({
    where: {
      id,
    },
    data: {
      ...param,
      updatedAt: new Date(),
    },
  });

  return res;
};
