/*
  Warnings:

  - Added the required column `Estado` to the `pets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cidade` to the `pets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "pets" ADD COLUMN     "Estado" TEXT NOT NULL,
ADD COLUMN     "cidade" TEXT NOT NULL;
