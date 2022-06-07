/*
  Warnings:

  - You are about to drop the `Cursos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Estudantes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Estudantes" DROP CONSTRAINT "Estudantes_cursosId_fkey";

-- DropTable
DROP TABLE "Cursos";

-- DropTable
DROP TABLE "Estudantes";

-- CreateTable
CREATE TABLE "Curso" (
    "id" UUID NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "Curso_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Estudante" (
    "id" UUID NOT NULL,
    "nome" TEXT NOT NULL,
    "ra" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cursoId" UUID NOT NULL,

    CONSTRAINT "Estudante_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Curso_nome_key" ON "Curso"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "Estudante_ra_key" ON "Estudante"("ra");

-- CreateIndex
CREATE UNIQUE INDEX "Estudante_email_key" ON "Estudante"("email");

-- AddForeignKey
ALTER TABLE "Estudante" ADD CONSTRAINT "Estudante_cursoId_fkey" FOREIGN KEY ("cursoId") REFERENCES "Curso"("id") ON DELETE SET NULL ON UPDATE CASCADE;
