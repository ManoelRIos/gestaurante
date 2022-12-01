/*
  Warnings:

  - You are about to drop the column `cardapioId` on the `ItemCardapio` table. All the data in the column will be lost.
  - You are about to drop the column `itemPedidoId` on the `ItemCardapio` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ItemCardapio" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "preco" TEXT NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "imagem" TEXT NOT NULL,
    "categoria" TEXT NOT NULL
);
INSERT INTO "new_ItemCardapio" ("categoria", "descricao", "id", "imagem", "nome", "preco", "quantidade") SELECT "categoria", "descricao", "id", "imagem", "nome", "preco", "quantidade" FROM "ItemCardapio";
DROP TABLE "ItemCardapio";
ALTER TABLE "new_ItemCardapio" RENAME TO "ItemCardapio";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
