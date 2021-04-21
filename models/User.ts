import { User } from "./index";
import * as crypto from "crypto";

export const findByUniqueByToken = (token) => {
  return User.findUnique({
    where: {
      token,
    },
  });
};

export const findUserList = () => {
  return User.findMany({
    select: {
      isAdmin: true,
      token: false,
      name: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};

export const addUpsertUser = (mail: string) => {
  return User.upsert({
    where: {
      token: mail,
    },
    create: {
      token: crypto.createHash("sha512").update(mail).digest("base64") as string,
      name: mail,
      isAdmin: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    update: {},
    select: {
      token: true,
      name: true,
      isAdmin: true,
    },
  });
};
