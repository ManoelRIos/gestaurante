import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Pedido } from 'src/app/models/Pedido';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent implements OnInit {


  public title = 'Pedidos';

  public pedidos: Pedido[] = [
    { id:'1', tempoDecorrido:'1',  numeroMesa: 2,
     itensPedido: [
      {id: '1', qtd: 1,
      itensCardapio: {id: '1', nome: 'Batata', preco: 10, categoria: 'Porção'},    
      },
      {id: '2', qtd: 3,
      itensCardapio: 
        {id: '2', nome: 'Coca-Lata', preco: 15, categoria: 'Bebida'},}
    ], 
     observacao: '', status: 2},

    { id:'2', tempoDecorrido:'1', numeroMesa: 1,
     itensPedido: [
      {id: '1', qtd: 1,
       itensCardapio: {id: '1', nome: 'Batata', preco: 10, categoria: 'Porção'}
      }
    ],
      observacao: 'Batata sem óleo', status: 0},

    { id:'3', tempoDecorrido:'1', numeroMesa: 1,
     itensPedido: [
      {id: '1', qtd: 1,
     itensCardapio: {id: '1', nome: 'Batata', preco: 10, categoria: 'Porção'}
     }
    ],
      observacao: '', status: 0},
  ];
  
  totalPedidos: number = this.pedidos.length;
  totalPedidosCancelados: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.calcPedidosCancelados(this.pedidos)
  }

  calcPedidosCancelados(pedidos: Pedido[]): number {    
    pedidos.forEach(pedido => {
      if(pedido.status == 3) {
        this.totalPedidosCancelados += 1;
      }
    });
    return this.totalPedidosCancelados
  }



}
