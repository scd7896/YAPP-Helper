import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const MailForm = prisma.mailForms;
export const User = prisma.users;
