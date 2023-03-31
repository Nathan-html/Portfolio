-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN', 'OWNER');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Achievement" (
    "id" SERIAL NOT NULL,
    "tag" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "imageId" INTEGER NOT NULL,

    CONSTRAINT "Achievement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Skill" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "imageId" INTEGER NOT NULL,

    CONSTRAINT "Skill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Image" (
    "id" SERIAL NOT NULL,
    "src" TEXT NOT NULL,
    "alt" TEXT NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Historyitem" (
    "id" SERIAL NOT NULL,
    "year" TEXT NOT NULL,

    CONSTRAINT "Historyitem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Historyachievements" (
    "id" SERIAL NOT NULL,
    "state" TEXT,
    "title" TEXT NOT NULL,
    "desc" TEXT,
    "place" TEXT,
    "historyitemId" INTEGER,

    CONSTRAINT "Historyachievements_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Achievement_imageId_key" ON "Achievement"("imageId");

-- CreateIndex
CREATE UNIQUE INDEX "Skill_imageId_key" ON "Skill"("imageId");

-- AddForeignKey
ALTER TABLE "Achievement" ADD CONSTRAINT "Achievement_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Image"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Skill" ADD CONSTRAINT "Skill_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Image"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Historyachievements" ADD CONSTRAINT "Historyachievements_historyitemId_fkey" FOREIGN KEY ("historyitemId") REFERENCES "Historyitem"("id") ON DELETE SET NULL ON UPDATE CASCADE;
