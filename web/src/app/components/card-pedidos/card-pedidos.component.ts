import { ItemPedido } from 'src/app/models/ItemPedido';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pedido } from 'src/app/models/Pedido';

@Component({
  selector: 'app-card-pedidos',
  templateUrl: './card-pedidos.component.html',
  styleUrls: ['./card-pedidos.component.scss']
})
export class CardPedidosComponent implements OnInit {

  @Input() pedidos!: Pedido[];

  pedidosPendente: Pedido[] = [];
  pedidosEmPreparo: Pedido[] = [];
  pedidosConcluido: Pedido[] = [];

  constructor() { }

  ngOnInit() {
    this.calcPedidosStatus(this.pedidos)
  }

  atualizaStatusPedido(pedidos: Pedido[]) {      
  }

  calcPedidosStatus(pedidos: Pedido[]) {
    pedidos.forEach(pedido => {    
      if(pedido.status == 0){
        this.pedidosPendente.push(pedido)
      } else if (pedido.status == 1) {
        this.pedidosEmPreparo.push(pedido)
      } else if (pedido.status == 2) {
        this.pedidosConcluido.push(pedido)
      }
    });
  }



}
