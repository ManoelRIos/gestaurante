import { Inject } from '@angular/core';
import { Mesa } from 'src/app/models/Mesa';
import { Component, Input, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ItemCardapio } from 'src/app/models/ItemCardapio';
import { ItemPedido } from 'src/app/models/ItemPedido';
import { Pedido } from 'src/app/models/Pedido';
import { ItemCardapioService } from 'src/app/services/itemCardapio.service';
import { ModalVisualizarPedidoMesa } from './modal-visualizar-pedido-mesa/modal-visualizar-pedido-mesa';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.scss'],
})
export class CardapioComponent implements OnInit {
  //Validar se o login foi feito por um gerente
  @Input() isGerente: boolean = true;
  @Input() mostrarCardapio!: boolean;
  @Input() mesa!: Mesa;

  public title = 'Cardápio';

  pratoSelected!: string;
  public filterCardapio: boolean = false;
  public categoriaSelected: string = '';

  public cardapio: ItemCardapio[] = [];

  public itensPedido: ItemPedido[] = [];
  public itemPedido!: ItemPedido;
  public pedido!: Pedido;

  constructor(
    public modal: MatDialog,
    public itemCardapioService: ItemCardapioService
  ) {}

  ngOnInit(): void {
    this.carregarItensCardapio();
  }

  carregarItensCardapio() {
    this.itemCardapioService.getAll().subscribe((cardapio: ItemCardapio[]) => {
      this.cardapio = cardapio;
    }),
      (error: any) => {
        console.error(error);
      };
  }

  pratoSelect(prato: any) {
    this.pratoSelected = prato.nome;
  }

  voltar() {
    this.pratoSelected = '';
  }

  openModalVisualizarPedidoMesa() {
    this.modal.open(ModalVisualizarPedidoMesa, {
      data: this.pedido,
    });
  }

  addItemPedido(itemCardapio: ItemCardapio) {
    var itemPedidoId = String(Math.floor(Math.random() * (99 - 10) * 10));
    this.itemPedido = { id: itemPedidoId, qtd: 1, itensCardapio: itemCardapio };
    this.itensPedido.push(this.itemPedido);
    var pedidoId = String(Math.floor(Math.random() * (99 - 10) * 10));
    this.pedido = {
      id: pedidoId,
      itensPedido: this.itensPedido,
      numeroMesa: this.mesa.numeroMesa,
      status: 0,
      observacao: 'Teste',
      tempoDecorrido: '15 min',
    };
    this.mesa.conta?.pedidos?.push(this.pedido);
    console.log(this.pedido);
  }
}

//Modal de visualizar pedidos de mesa

