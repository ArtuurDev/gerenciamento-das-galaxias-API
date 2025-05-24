/*
  Warnings:

  - Changed the type of `manufacturer` on the `Spaceship` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "ManagerOf" AS ENUM ('PLANET', 'STARSYSTEM', 'CHARACTER', 'SPACESHIP');

-- AlterTable
ALTER TABLE "Spaceship" DROP COLUMN "manufacturer",
ADD COLUMN     "manufacturer" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Manager" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Manager_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ManagerPermission" (
    "id" TEXT NOT NULL,
    "managerId" TEXT NOT NULL,
    "managerOf" "ManagerOf" NOT NULL,

    CONSTRAINT "ManagerPermission_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ManagerPermission" ADD CONSTRAINT "ManagerPermission_managerId_fkey" FOREIGN KEY ("managerId") REFERENCES "Manager"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
