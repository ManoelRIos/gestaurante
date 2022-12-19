import { MesaService } from './../../../services/Mesa.service';
import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Mesa } from "src/app/models/Mesa";
import { Pedido } from "src/app/models/Pedido";
import { Router } from '@angular/router';

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
    @Inject(MAT_DIALOG_DATA) public data: any,
    public mesaService: MesaService,
    public route: Router
  ) {
  }

  pedidos: Pedido[] = []

  fazerPedido() {
    this.pedidos.push(this.data.pedido)
    this.mesaService.criarConta (this.data.mesa, this.pedidos)
    this.route.navigate(['/mesas'])
  }

  onNoClick(): void {
    this.modalRef.close();
  }
}