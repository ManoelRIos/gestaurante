import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { ItemPedido } from 'src/app/models/ItemPedido';
import { Pedido } from 'src/app/models/Pedido';

@Component({
  selector: 'app-card-pedido',
  templateUrl: './card-pedido.component.html',
  styleUrls: ['./card-pedido.component.scss']
})
export class CardPedidoComponent implements OnInit {

  @Output() atualizaStatusPedido: EventEmitter<any> = new EventEmitter();
  @Output() checkPedido: EventEmitter<any> = new EventEmitter();
  @Output() cancelaPedido: EventEmitter<any> = new EventEmitter();
    
  @Input () id!: string;  
  @Input() numeroMesa!: number;
  @Input() itensPedido!: ItemPedido[];
  @Input() observacao?: string;
  @Input() tempoDecorrido!: string
  @Input() status!: boolean;


  constructor(public modal: MatDialog) { }

  ngOnInit() {
  }

  onHandleClickAddStatus() {
    this.atualizaStatusPedido.emit()
  }  

  onHandleClickPedidoChecked() {
    this.checkPedido.emit()
  }

  onHandleClickCancelarPedido(){    
    this.cancelaPedido.emit()
  }



}
