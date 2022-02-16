import { PrismaClient } from "@prisma/client";
import * as crypto from "crypto";
import * as dotenv from 'dotenv';
dotenv.config();

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
      isAdmin: true,
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
        title: "리쿠르트 합격",
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
        title: "리쿠르트 불합격",
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

const completionMailFormCreate = async () => {
  const mailforms = await prisma.mailForms.findMany({ where: { type: "completion" } });
  if (mailforms.length < 1) {
    await prisma.mailForms.create({
      data: {
        title: "기수 수료증 발송",
        type: "completion",
        pass: true,
        contents: "한 기수 동안 수고 많으셨습니다.",
        header_image: "https://picsum.photos/500/100",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
  }
};
const init = () => {
  Promise.all([mailFormCreate(), userCreate(), completionMailFormCreate()]).then(() => {
    process.exit();
  });
};

init();
