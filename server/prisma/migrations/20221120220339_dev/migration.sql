-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ItemPedido" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "quantidade" INTEGER NOT NULL,
    "itemCardapioId" INTEGER NOT NULL,
    "pedidoId" TEXT,
    CONSTRAINT "ItemPedido_itemCardapioId_fkey" FOREIGN KEY ("itemCardapioId") REFERENCES "ItemCardapio" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ItemPedido_pedidoId_fkey" FOREIGN KEY ("pedidoId") REFERENCES "Pedido" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_ItemPedido" ("id", "itemCardapioId", "quantidade") SELECT "id", "itemCardapioId", "quantidade" FROM "ItemPedido";
DROP TABLE "ItemPedido";
ALTER TABLE "new_ItemPedido" RENAME TO "ItemPedido";
CREATE UNIQUE INDEX "ItemPedido_itemCardapioId_key" ON "ItemPedido"("itemCardapioId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
