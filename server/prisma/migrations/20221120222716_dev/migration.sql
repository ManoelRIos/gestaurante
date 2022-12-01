/*
  Warnings:

  - A unique constraint covering the columns `[contaId]` on the table `Pedido` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Pedido_contaId_key" ON "Pedido"("contaId");
