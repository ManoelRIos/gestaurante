import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ItemPedido } from "src/app/models/ItemPedido";
import { Pedido } from "src/app/models/Pedido";

//Modal cancelar pedido
@Component({
  selector: 'modal-cancelar-pedido',
  templateUrl: './modal-cancelar-pedido.html',
  styleUrls: ['./modal-cancelar-pedido.scss']
})
export class ModalCancelarPedido {  

  constructor
  (
    public modalRef: MatDialogRef<ModalCancelarPedido>,
    @Inject(MAT_DIALOG_DATA) public data: Pedido,     
  ) 

  {}

  incrementaQtdItemPedido(itemPedido: ItemPedido){
    itemPedido.qtd += 1
  }

  decrementaQtdItemPedido(itemPedido: ItemPedido){
    if(itemPedido.qtd > 0){
      itemPedido.qtd -= 1
    }
  }
  
  onNoClick(): void {    
    this.modalRef.close();    
  }
}
