import { Conta } from "./Conta";

export class Mesa {
  id!: string;
  numeroMesa!: number;
  assentos!: number;
  status!: boolean;
  conta? : Conta
}