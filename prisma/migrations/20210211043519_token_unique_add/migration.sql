/*
  Warnings:

  - The migration will add a unique constraint covering the columns `[token]` on the table `Users`. If there are existing duplicate values, the migration will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Users.token_unique` ON `Users`(`token`);
