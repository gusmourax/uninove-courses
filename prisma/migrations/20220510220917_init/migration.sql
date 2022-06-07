-- CreateTable
CREATE TABLE "Cursos" (
    "id" UUID NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "Cursos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Estudantes" (
    "id" UUID NOT NULL,
    "nome" TEXT NOT NULL,
    "ra" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cursosId" UUID NOT NULL,

    CONSTRAINT "Estudantes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Cursos_nome_key" ON "Cursos"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "Estudantes_ra_key" ON "Estudantes"("ra");

-- CreateIndex
CREATE UNIQUE INDEX "Estudantes_email_key" ON "Estudantes"("email");

-- AddForeignKey
ALTER TABLE "Estudantes" ADD CONSTRAINT "Estudantes_cursosId_fkey" FOREIGN KEY ("cursosId") REFERENCES "Cursos"("id") ON DELETE SET NULL ON UPDATE CASCADE;
