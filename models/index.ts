import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();
export const MailForm = client.mailForms;
export const User = client.users;
