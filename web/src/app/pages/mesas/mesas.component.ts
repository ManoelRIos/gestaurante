import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Mesa } from 'src/app/models/Mesa';

@Component({
  selector: 'app-mesas',
  templateUrl: './mesas.component.html',
  styleUrls: ['./mesas.component.scss']
})

export class MesasComponent implements OnInit {

  public mesas: Mesa[] = [
    {id: "1", numeroMesa: 1, assentos: 8, status: false },
    {id: "2", numeroMesa: 2, assentos: 6, status: true },
    {id: "3", numeroMesa: 3, assentos: 2, status: true },
    {id: "4", numeroMesa: 4, assentos: 4, status: false },
  ]

  public mesaSelected: any;
  public modalIsOpen = false;
  public title = 'Mesas';

  constructor(public modal: MatDialog) { }

  ngOnInit() {
  }

  openModalCadastrarMesa(){
    this.modal.open(ModalCadastrarMesa)
  }

  selectMesa(mesa: Mesa){
    this.mesaSelected = mesa;
  }
}





//Modal de cadastro de mesa
@Component({
  selector: 'modal-cadastrar-mesa',
  templateUrl: './modal-cadastrar-mesa.html',
  styleUrls: ['./modal-cadastrar-mesa.scss']
})
export class ModalCadastrarMesa {
  constructor(public modalRef: MatDialogRef<ModalCadastrarMesa>) {}

  onNoClick(): void {
    this.modalRef.close();
  }
}

