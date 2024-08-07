/*
  Warnings:

  - You are about to drop the column `email` on the `guestbook` table. All the data in the column will be lost.
  - Added the required column `avatar_url` to the `guestbook` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "guestbook" DROP COLUMN "email",
ADD COLUMN     "avatar_url" VARCHAR(256) NOT NULL;
