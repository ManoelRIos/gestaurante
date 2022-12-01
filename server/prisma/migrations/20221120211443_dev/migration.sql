-- RedefineTables
PRAGMA foreign_keys=OFF;
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
INSERT INTO "new_ItemCardapio" ("categoria", "descricao", "id", "imagem", "nome", "preco", "quantidade") SELECT "categoria", "descricao", "id", "imagem", "nome", "preco", "quantidade" FROM "ItemCardapio";
DROP TABLE "ItemCardapio";
ALTER TABLE "new_ItemCardapio" RENAME TO "ItemCardapio";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
