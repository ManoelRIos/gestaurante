import { MesaService } from './../../services/Mesa.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Mesa } from 'src/app/models/Mesa';

@Component({
  selector: 'app-mesas',
  templateUrl: './mesas.component.html',
  styleUrls: ['./mesas.component.scss'],
})
export class MesasComponent implements OnInit {
  public mesas: Mesa[] = [];


  public mostrarCardapio = false;
  public mesaSelected: any;
  public modalIsOpen = false;
  public title = 'Mesas';

  constructor(public modal: MatDialog, private mesaService: MesaService) {}

  ngOnInit() {
    this.mesas = this.mesaService.mesas;
    console.log(this.mesas)
  }

  openModalCadastrarMesa() {
    this.modal.open(ModalCadastrarMesa);
  }

  openModalFecharConta() {
    this.modal.open(ModalFecharConta);
  }

  selectMesa(mesa: Mesa) {
    this.mesaSelected = mesa;
  }

  abrirConta() {
    this.mostrarCardapio = true;
  }

  pegaMesa(numMesa: number) {
    this.mesaSelected = this.mesaService.mesas.find(mesa => mesa.numeroMesa === numMesa)
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
