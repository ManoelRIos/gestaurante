
import { Injectable } from '@angular/core';
import { Conta } from '../models/Conta';
import { Mesa } from '../models/Mesa';
import { Pedido } from '../models/Pedido';


@Injectable({
  providedIn: 'root',
})

export class MesaService {

  public mesa!: any;
  public mesas: Mesa[] = [
    { id: '0', numeroMesa: 0, assentos: 4, status: false },
    { id: '1', numeroMesa: 1, assentos: 4, status: false },
    { id: '2', numeroMesa: 2, assentos: 6, status: false },
    { id: '3', numeroMesa: 3, assentos: 2, status: false },
    { id: '4', numeroMesa: 4, assentos: 4, status: false },
    { id: '5', numeroMesa: 5, assentos: 4, status: false },
    { id: '6', numeroMesa: 6, assentos: 4, status: false },
    { id: '7', numeroMesa: 7, assentos: 4, status: false },
    { id: '8', numeroMesa: 8, assentos: 4, status: false },
    { id: '9', numeroMesa: 9, assentos: 4, status: false },
  ];

  public conta!: Conta;

  constructor() {}

  criarConta(mesa: Mesa, pedidos: Pedido[]) {
    this.mesa = null;
    var contaId = Math.floor(Math.random() * (99 - 10) * 10) 
    this.conta = {
      id: contaId,
      assentosOcupados: 2,
      horaAbertura: new Date(),
      horaDoFechamento: new Date(),
      mesa: mesa.numeroMesa,
      status: true,
      pedidos: pedidos
    };
    mesa.conta = this.conta;
    this.mesa = mesa;
    var index = this.mesas.findIndex(mesa => mesa.id === mesa.id);
    this.mesas.splice(index, 1, this.mesa);
    console.log(this.mesas)
  }

}
