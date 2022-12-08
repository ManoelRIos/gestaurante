import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Pedido } from "src/app/models/Pedido";

@Component({
  selector: 'modal-visualizar-pedido-mesa',
  templateUrl:
    './modal-visualizar-pedido-mesa.html',
  styleUrls: [
    './modal-visualizar-pedido-mesa.scss',
  ],
})
export class ModalVisualizarPedidoMesa {
  constructor(
    public modalRef: MatDialogRef<ModalVisualizarPedidoMesa>,
    @Inject(MAT_DIALOG_DATA) public data: Pedido
  ) {
    console.log(data)
  }

  onNoClick(): void {
    this.modalRef.close();
  }
}