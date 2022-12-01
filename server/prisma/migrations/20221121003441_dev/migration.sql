/*
  Warnings:

  - You are about to drop the `Conta` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ItemCardapio` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ItemPedido` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Mesa` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Pedido` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Usuario` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Conta";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "ItemCardapio";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "ItemPedido";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Mesa";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Pedido";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Usuario";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "MESA" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "numeroMesa" INTEGER NOT NULL,
    "assentos" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "PEDIDO" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "contaId" TEXT NOT NULL,
    CONSTRAINT "PEDIDO_contaId_fkey" FOREIGN KEY ("contaId") REFERENCES "CONTA" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ITEM_PEDIDO" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "quantidade" INTEGER NOT NULL,
    "itemCardapioId" INTEGER NOT NULL,
    "pedidoId" TEXT NOT NULL,
    CONSTRAINT "ITEM_PEDIDO_itemCardapioId_fkey" FOREIGN KEY ("itemCardapioId") REFERENCES "ITEM_CARDAPIO" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ITEM_PEDIDO_pedidoId_fkey" FOREIGN KEY ("pedidoId") REFERENCES "PEDIDO" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CONTA" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "assentosOcupados" INTEGER NOT NULL,
    "horaAbertura" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "horaDoFechamento" TEXT NOT NULL,
    "status" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "ITEM_CARDAPIO" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "preco" INTEGER NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "imagem" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "cardapioId" TEXT,
    CONSTRAINT "ITEM_CARDAPIO_cardapioId_fkey" FOREIGN KEY ("cardapioId") REFERENCES "Cardapio" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "USUARIO" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "cargo" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "MESA_numeroMesa_key" ON "MESA"("numeroMesa");

-- CreateIndex
CREATE UNIQUE INDEX "ITEM_PEDIDO_itemCardapioId_key" ON "ITEM_PEDIDO"("itemCardapioId");
