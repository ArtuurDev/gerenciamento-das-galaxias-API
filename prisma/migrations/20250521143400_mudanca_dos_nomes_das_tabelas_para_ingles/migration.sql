/*
  Warnings:

  - You are about to drop the `NaveEspacial` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Personagen` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Planeta` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SistemaEstelar` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Affiliation" AS ENUM ('JEDI', 'SITH', 'REBEL');

-- CreateEnum
CREATE TYPE "Manufacturer" AS ENUM ('JEDI', 'SITH', 'REBEL');

-- DropForeignKey
ALTER TABLE "Planeta" DROP CONSTRAINT "Planeta_sistemaEstelarId_fkey";

-- DropTable
DROP TABLE "NaveEspacial";

-- DropTable
DROP TABLE "Personagen";

-- DropTable
DROP TABLE "Planeta";

-- DropTable
DROP TABLE "SistemaEstelar";

-- DropEnum
DROP TYPE "Afiliacao";

-- DropEnum
DROP TYPE "Fabricante";

-- CreateTable
CREATE TABLE "Planet" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "tipo_de_clima" TEXT NOT NULL,
    "tipo_de_terreno" TEXT NOT NULL,
    "population" INTEGER NOT NULL,
    "starSystemId" TEXT NOT NULL,

    CONSTRAINT "Planet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StarSystem" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "StarSystem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Character" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "species" TEXT NOT NULL,
    "affiliation" "Affiliation" NOT NULL,

    CONSTRAINT "Character_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Spaceship" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "manufacturer" "Manufacturer" NOT NULL,
    "capacidade_de_passageiros" INTEGER NOT NULL,

    CONSTRAINT "Spaceship_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Planet" ADD CONSTRAINT "Planet_starSystemId_fkey" FOREIGN KEY ("starSystemId") REFERENCES "StarSystem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
