-- CreateEnum
CREATE TYPE "Afiliacao" AS ENUM ('JEDI', 'SITH', 'REBELDE');

-- CreateEnum
CREATE TYPE "Fabricante" AS ENUM ('JEDI', 'SITH', 'REBELDE');

-- CreateTable
CREATE TABLE "Planeta" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "tipo_de_clima" TEXT NOT NULL,
    "tipo_de_terreno" TEXT NOT NULL,
    "populacao" INTEGER NOT NULL,
    "sistemaEstelarId" TEXT NOT NULL,

    CONSTRAINT "Planeta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SistemaEstelar" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "SistemaEstelar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Personagen" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "raca" TEXT NOT NULL,
    "afiliacao" "Afiliacao" NOT NULL,

    CONSTRAINT "Personagen_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NaveEspacial" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "fabricante" "Fabricante" NOT NULL,
    "capacidade_de_passageiros" INTEGER NOT NULL,

    CONSTRAINT "NaveEspacial_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Planeta" ADD CONSTRAINT "Planeta_sistemaEstelarId_fkey" FOREIGN KEY ("sistemaEstelarId") REFERENCES "SistemaEstelar"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
