import { ItemPedido } from "./ItemPedido";
import { Mesa } from "./Mesa";

export class Pedido {
  [x: string]: any;
  id!: string;
  tempoDecorrido!: string;
  numeroMesa!: number;
  itensPedido!: ItemPedido[];
  observacao?: string;
  status: number = 0;
}

