import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-mesas',
  templateUrl: './mesas.component.html',
  styleUrls: ['./mesas.component.scss']
})

export class MesasComponent implements OnInit {

  public modalIsOpen = false;
  public title = 'Mesas';

  constructor(public modal: MatDialog) { }

  openModalCadastrarMesa(){
    this.modal.open(ModalCadastrarMesa)
  }
  ngOnInit() {
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

