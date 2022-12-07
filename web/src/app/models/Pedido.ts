import { ItemPedido } from "./ItemPedido";
import { Mesa } from "./Mesa";

export class Pedido {
  id!: string;
  tempoDecorrido!: string;
  numeroMesa!: number;
  itensPedido!: ItemPedido[];
  observacao?: string;
  status: number = 0;
}

