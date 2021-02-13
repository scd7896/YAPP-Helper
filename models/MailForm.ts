import { MailForms } from "@prisma/client";
import { MailForm } from "./index";

export const findMailFormById = (id: number) => {
  return MailForm.findUnique({
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
};

export const findMailFormOrderById = async () => {
  const mailforms = await MailForm.findMany({
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
    header_image: `/${mailform.header_image}`,
    map_image: `/${mailform.map_image}`,
  }));
};

export const updateMailForm = (id: number, data: MailForms) => {
  return MailForm.update({
    where: {
      id,
    },
    data: {
      ...data,
      updatedAt: new Date(),
    },
  });
};
