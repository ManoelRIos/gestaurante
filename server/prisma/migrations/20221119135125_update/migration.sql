/*
  Warnings:

  - You are about to alter the column `horaAbertura` on the `Conta` table. The data in that column could be lost. The data in that column will be cast from `String` to `DateTime`.

*/
-- CreateTable
CREATE TABLE "Cardapio" (
    "id" TEXT NOT NULL PRIMARY KEY
);

-- CreateTable
CREATE TABLE "Usuario" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "cargo" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Venda" (
    "id" TEXT NOT NULL PRIMARY KEY
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ItemCardapio" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "preco" REAL NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "imagem" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "itemPedidoId" TEXT,
    "cardapioId" TEXT,
    CONSTRAINT "ItemCardapio_itemPedidoId_fkey" FOREIGN KEY ("itemPedidoId") REFERENCES "ItemPedido" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "ItemCardapio_cardapioId_fkey" FOREIGN KEY ("cardapioId") REFERENCES "Cardapio" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_ItemCardapio" ("categoria", "descricao", "id", "imagem", "itemPedidoId", "nome", "preco", "quantidade") SELECT "categoria", "descricao", "id", "imagem", "itemPedidoId", "nome", "preco", "quantidade" FROM "ItemCardapio";
DROP TABLE "ItemCardapio";
ALTER TABLE "new_ItemCardapio" RENAME TO "ItemCardapio";
CREATE TABLE "new_Conta" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "assentosOcupados" INTEGER NOT NULL,
    "horaAbertura" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "horaDoFechamento" TEXT NOT NULL,
    "status" INTEGER NOT NULL
);
INSERT INTO "new_Conta" ("assentosOcupados", "horaAbertura", "horaDoFechamento", "id", "status") SELECT "assentosOcupados", "horaAbertura", "horaDoFechamento", "id", "status" FROM "Conta";
DROP TABLE "Conta";
ALTER TABLE "new_Conta" RENAME TO "Conta";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
