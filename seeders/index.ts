import { PrismaClient } from "@prisma/client";
import * as crypto from "crypto";

const prisma = new PrismaClient();

const userCreate = async () => {
  await prisma.users.upsert({
    select: {
      token: true,
    },
    where: {
      token: crypto.createHash("sha512").update(process.env.GOOGLE_ACCESS.toString()).digest("base64"),
    },
    create: {
      token: crypto.createHash("sha512").update(process.env.GOOGLE_ACCESS.toString()).digest("base64") as string,
      name: "supportYapp",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    update: {},
  });

  await prisma.users.upsert({
    where: {
      token: crypto.createHash("sha512").update(process.env.CDO_ACCESSTOKEN.toString()).digest("base64"),
    },
    create: {
      token: crypto.createHash("sha512").update(process.env.CDO_ACCESSTOKEN.toString()).digest("base64"),
      name: "supportYapp",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    update: {},
  });
};

const mailFormCreate = async () => {
  const mailforms = await prisma.mailForms.findMany();

  if (mailforms.length < 2) {
    await prisma.mailForms.create({
      data: {
        title: "Lorem ipsum dolor sit amet",
        type: "meeting",
        pass: true,
        contents: "test",
        header_image: "https://picsum.photos/500/100",
        map_image: "https://picsum.photos/500/300",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    await prisma.mailForms.create({
      data: {
        title: "Lorem ipsum dolor sit amet",
        type: "meeting",
        pass: false,
        contents: "test1",
        header_image: "https://picsum.photos/500/100",
        map_image: "https://picsum.photos/500/300",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
  }
};

mailFormCreate();
userCreate();
