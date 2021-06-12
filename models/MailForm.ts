/* eslint-disable implicit-arrow-linebreak */
import { MailForms } from "@prisma/client";
import { originPath } from "../controller/file";
import { MailForm } from "./index";

export const findMailFormById = (id: number) =>
  MailForm.findUnique({
    select: {
      id: true,
      title: true,
      contents: true,
      header_image: true,
      map_image: true,
      updatedAt: true,
      createdAt: true,
    },
    where: { id },
  });

export const findMailFormOrderById = async ({ type }) => {
  const mailforms = await MailForm.findMany({
    where: {
      type,
    },
    orderBy: {
      id: "asc",
    },
  });

  return mailforms.map((mailform) => ({
    id: mailform.id,
    title: mailform.title,
    type: mailform.type,
    pass: mailform.pass,
    contents: mailform.contents,
    header_image: `${originPath}${mailform.header_image}`,
    map_image: `${originPath}${mailform.map_image}`,
  }));
};

export const updateMailForm = (id: number, data: MailForms) =>
  MailForm.update({
    where: {
      id,
    },
    data: {
      ...data,
      updatedAt: new Date(),
    },
  });
