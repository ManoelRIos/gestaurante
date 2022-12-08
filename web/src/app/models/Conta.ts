import { Mesa } from "./Mesa";
import { Pedido } from "./Pedido";

export class Conta {
  id!: number;
  assentosOcupados!: number;
  horaAbertura: Date = new Date();
  horaDoFechamento: Date = new Date();
  status!: boolean
  mesa!: number;
  pedidos?: Pedido[];
}