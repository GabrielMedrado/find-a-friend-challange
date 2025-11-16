-- AlterEnum
ALTER TYPE "Role" ADD VALUE 'ONG';

-- AlterTable
ALTER TABLE "ongs" ALTER COLUMN "role" SET DEFAULT 'ONG';
