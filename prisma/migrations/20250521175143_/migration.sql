/*
  Warnings:

  - You are about to drop the column `tipo_de_clima` on the `Planet` table. All the data in the column will be lost.
  - You are about to drop the column `tipo_de_terreno` on the `Planet` table. All the data in the column will be lost.
  - You are about to drop the column `capacidade_de_passageiros` on the `Spaceship` table. All the data in the column will be lost.
  - Added the required column `climateType` to the `Planet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `terrainType` to the `Planet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `passengerCapacity` to the `Spaceship` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Planet" DROP COLUMN "tipo_de_clima",
DROP COLUMN "tipo_de_terreno",
ADD COLUMN     "climateType" TEXT NOT NULL,
ADD COLUMN     "terrainType" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Spaceship" DROP COLUMN "capacidade_de_passageiros",
ADD COLUMN     "passengerCapacity" INTEGER NOT NULL;
