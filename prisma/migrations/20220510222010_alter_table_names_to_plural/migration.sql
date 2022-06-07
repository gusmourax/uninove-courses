/*
  Warnings:

  - You are about to drop the `Curso` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Estudante` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Estudante" DROP CONSTRAINT "Estudante_cursoId_fkey";

-- DropTable
DROP TABLE "Curso";

-- DropTable
DROP TABLE "Estudante";

-- CreateTable
CREATE TABLE "cursos" (
    "id" UUID NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "cursos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "estudantes" (
    "id" UUID NOT NULL,
    "nome" TEXT NOT NULL,
    "ra" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cursoId" UUID NOT NULL,

    CONSTRAINT "estudantes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "cursos_nome_key" ON "cursos"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "estudantes_ra_key" ON "estudantes"("ra");

-- CreateIndex
CREATE UNIQUE INDEX "estudantes_email_key" ON "estudantes"("email");

-- AddForeignKey
ALTER TABLE "estudantes" ADD CONSTRAINT "estudantes_cursoId_fkey" FOREIGN KEY ("cursoId") REFERENCES "cursos"("id") ON DELETE SET NULL ON UPDATE CASCADE;
