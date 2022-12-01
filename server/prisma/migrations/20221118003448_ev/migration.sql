-- CreateTable
CREATE TABLE "ItemPedido" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "quantidade" INTEGER NOT NULL,
    "itemCardapioId" TEXT NOT NULL
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
    CONSTRAINT "ItemCardapio_itemPedidoId_fkey" FOREIGN KEY ("itemPedidoId") REFERENCES "ItemPedido" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_ItemCardapio" ("categoria", "descricao", "id", "imagem", "nome", "preco", "quantidade") SELECT "categoria", "descricao", "id", "imagem", "nome", "preco", "quantidade" FROM "ItemCardapio";
DROP TABLE "ItemCardapio";
ALTER TABLE "new_ItemCardapio" RENAME TO "ItemCardapio";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
