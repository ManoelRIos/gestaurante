import { ItemCardapio } from './ItemCardapio';

export class ItemPedido {
  id!: string;
  qtd!: number;
  itensCardapio!: ItemCardapio;
}