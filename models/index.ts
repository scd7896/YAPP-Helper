import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();
export const MailForm = client.mailForms;
export const User = client.users;
export const Certificate = client.certifiCate;

export * as MailFormModel from "./MailForm";
export * as CertificateModel from "./Certificate";
