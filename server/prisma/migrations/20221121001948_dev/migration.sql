/*
  Warnings:

  - Made the column `pedidoId` on table `ItemPedido` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ItemPedido" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "quantidade" INTEGER NOT NULL,
    "itemCardapioId" INTEGER NOT NULL,
    "pedidoId" TEXT NOT NULL,
    CONSTRAINT "ItemPedido_itemCardapioId_fkey" FOREIGN KEY ("itemCardapioId") REFERENCES "ItemCardapio" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ItemPedido_pedidoId_fkey" FOREIGN KEY ("pedidoId") REFERENCES "Pedido" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ItemPedido" ("id", "itemCardapioId", "pedidoId", "quantidade") SELECT "id", "itemCardapioId", "pedidoId", "quantidade" FROM "ItemPedido";
DROP TABLE "ItemPedido";
ALTER TABLE "new_ItemPedido" RENAME TO "ItemPedido";
CREATE UNIQUE INDEX "ItemPedido_itemCardapioId_key" ON "ItemPedido"("itemCardapioId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
