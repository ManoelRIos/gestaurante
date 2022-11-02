import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ItemPedido } from 'src/app/models/ItemPedido';
import { Pedido } from 'src/app/models/Pedido';

@Component({
  selector: 'app-card-pedido',
  templateUrl: './card-pedido.component.html',
  styleUrls: ['./card-pedido.component.scss']
})
export class CardPedidoComponent implements OnInit {

  @Input() atualizaStatusPedido!: () => {};
  
  @Input () id!: string;  
  @Input() numeroMesa!: number;
  @Input() itensPedido!: ItemPedido[];
  @Input() observacao?: string;
  @Input() tempoDecorrido!: string


  constructor() { }

  ngOnInit() {
  }

}
