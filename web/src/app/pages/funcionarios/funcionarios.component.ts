import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.scss']
})
export class FuncionariosComponent implements OnInit {

  isEdit = false;
  isCreate = false;

  public users: User[] = [
    {id: '1', nome: 'Manoel Rios', email: 'manoel@gmail.com', grupo: 'Gerente', senha: '123456'}
  ]

  constructor() { }

  ngOnInit() {
  }


}
