/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `guestbook` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "guestbook" ADD COLUMN     "email" VARCHAR(256);

-- CreateIndex
CREATE UNIQUE INDEX "guestbook_email_key" ON "guestbook"("email");
