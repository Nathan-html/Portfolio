/*
  Warnings:

  - You are about to drop the column `imageId` on the `Achievement` table. All the data in the column will be lost.
  - You are about to drop the column `imageId` on the `Skill` table. All the data in the column will be lost.
  - You are about to drop the `Image` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `imageAlt` to the `Achievement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageSrc` to the `Achievement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageAlt` to the `Skill` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageSrc` to the `Skill` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Achievement" DROP CONSTRAINT "Achievement_imageId_fkey";

-- DropForeignKey
ALTER TABLE "Skill" DROP CONSTRAINT "Skill_imageId_fkey";

-- DropIndex
DROP INDEX "Achievement_imageId_key";

-- DropIndex
DROP INDEX "Skill_imageId_key";

-- AlterTable
ALTER TABLE "Achievement" DROP COLUMN "imageId",
ADD COLUMN     "imageAlt" TEXT NOT NULL,
ADD COLUMN     "imageSrc" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Skill" DROP COLUMN "imageId",
ADD COLUMN     "imageAlt" TEXT NOT NULL,
ADD COLUMN     "imageSrc" TEXT NOT NULL;

-- DropTable
DROP TABLE "Image";
