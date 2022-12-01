/*
  Warnings:

  - The primary key for the `ItemCardapio` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `itemPedidoId` on the `ItemCardapio` table. All the data in the column will be lost.
  - You are about to alter the column `id` on the `ItemCardapio` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - The primary key for the `ItemPedido` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `ItemPedido` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `itemCardapioId` on the `ItemPedido` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ItemCardapio" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "preco" INTEGER NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "imagem" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "cardapioId" TEXT,
    CONSTRAINT "ItemCardapio_cardapioId_fkey" FOREIGN KEY ("cardapioId") REFERENCES "Cardapio" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_ItemCardapio" ("cardapioId", "categoria", "descricao", "id", "imagem", "nome", "preco", "quantidade") SELECT "cardapioId", "categoria", "descricao", "id", "imagem", "nome", "preco", "quantidade" FROM "ItemCardapio";
DROP TABLE "ItemCardapio";
ALTER TABLE "new_ItemCardapio" RENAME TO "ItemCardapio";
CREATE TABLE "new_ItemPedido" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "quantidade" INTEGER NOT NULL,
    "itemCardapioId" INTEGER NOT NULL,
    CONSTRAINT "ItemPedido_itemCardapioId_fkey" FOREIGN KEY ("itemCardapioId") REFERENCES "ItemCardapio" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ItemPedido" ("id", "itemCardapioId", "quantidade") SELECT "id", "itemCardapioId", "quantidade" FROM "ItemPedido";
DROP TABLE "ItemPedido";
ALTER TABLE "new_ItemPedido" RENAME TO "ItemPedido";
CREATE UNIQUE INDEX "ItemPedido_itemCardapioId_key" ON "ItemPedido"("itemCardapioId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
