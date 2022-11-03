import { ItemPedido } from 'src/app/models/ItemPedido';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pedido } from 'src/app/models/Pedido';
import { MatDialog } from '@angular/material/dialog';
import { ModalCancelarPedido } from './modal-cancelar-pedido/modal-cancelar-pedido';

@Component({
  selector: 'app-card-pedidos',
  templateUrl: './card-pedidos.component.html',
  styleUrls: ['./card-pedidos.component.scss']
})
export class CardPedidosComponent implements OnInit {

  @Input() pedidos: Pedido[] = [];

  pedidosPendente: Pedido[]= [];
  pedidosEmPreparo: Pedido[] = [];
  pedidosConcluido: Pedido[] = [];

  constructor(public modal: MatDialog) { 
    
  }

  ngOnInit() {    
    this.definePedidos()
  }

  onAtualizaStatusPedido(idPedido: string) {   
    console.log("ok")       
    var pedido = this.pedidos.find(({id}) => id === idPedido)
    if(pedido){
      pedido.status += 1    
    }     
    this.definePedidos()
  }

  onCheckPedido(pedidoSelect: Pedido){
    //DeletarPedido
    this.definePedidos()
  }

  definePedidos() {
    this.pedidosPendente = this.pedidos.filter(({status}) => status === 0);
    this.pedidosEmPreparo = this.pedidos.filter(({status}) => status === 1);
    this.pedidosConcluido = this.pedidos.filter(({status}) => status === 2);
  }

  openModalCancelarPedido(pedido: Pedido){ 
    console.log('a')
    
    const modalRef = this.modal.open(ModalCancelarPedido, {
      data: pedido  
    })

    modalRef.afterClosed().subscribe(result => {     
    });
  }

}
