import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Conta } from 'src/app/models/Conta';
import { Mesa } from 'src/app/models/Mesa';

@Component({
  selector: 'app-mesas',
  templateUrl: './mesas.component.html',
  styleUrls: ['./mesas.component.scss'],
})
export class MesasComponent implements OnInit {
  public mesas: Mesa[] = [
    { id: '1', numeroMesa: 1, assentos: 4, status: false },
    { id: '2', numeroMesa: 2, assentos: 6, status: true },
    { id: '3', numeroMesa: 3, assentos: 2, status: true },
    { id: '4', numeroMesa: 4, assentos: 4, status: false },
  ];

  public contas: Conta[] = [];
  public conta!: Conta;

  public mostrarCardapio = false;
  public mesaSelected: any;
  public modalIsOpen = false;
  public title = 'Mesas';

  constructor(public modal: MatDialog) {}

  ngOnInit() {}

  openModalCadastrarMesa() {
    this.modal.open(ModalCadastrarMesa);
  }

  openModalFecharConta() {
    this.modal.open(ModalFecharConta);
  }

  selectMesa(mesa: Mesa) {
    this.mesaSelected = mesa;
  }

  abrirConta(mesa: Mesa) {

    var contaId = Math.floor(Math.random() * (99 - 10) * 10) 
    this.conta = {
      id: contaId,
      assentosOcupados: 2,
      horaAbertura: new Date(),
      horaDoFechamento: new Date(),
      mesa: mesa.numeroMesa,
      status: true
    };
    this.contas.push(this.conta)
    console.log(this.conta)
    console.log(this.contas)
    this.mesaSelected.conta = this.conta;
    console.log(this.mesaSelected.conta.pedidos)
  }
}

//Modal de cadastro de mesa
@Component({
  selector: 'modal-cadastrar-mesa',
  templateUrl: './modal-cadastrar-mesa/modal-cadastrar-mesa.html',
  styleUrls: ['./modal-cadastrar-mesa/modal-cadastrar-mesa.scss'],
})
export class ModalCadastrarMesa {
  constructor(public modalRef: MatDialogRef<ModalCadastrarMesa>) {}

  onNoClick(): void {
    this.modalRef.close();
  }
}

//Modal de cadastro de mesa
@Component({
  selector: 'modal-fechar-conta',
  templateUrl: './modal-fechar-conta/modal-fechar-conta.html',
  styleUrls: ['./modal-fechar-conta/modal-fechar-conta.scss'],
})
export class ModalFecharConta {
  constructor(public modalRef: MatDialogRef<ModalFecharConta>) {}

  onNoClick(): void {
    this.modalRef.close();
  }
}
