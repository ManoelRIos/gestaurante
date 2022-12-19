
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Conta } from '../models/Conta';
import { Mesa } from '../models/Mesa';
import { Pedido } from '../models/Pedido';
import { User } from '../models/User';


@Injectable({
  providedIn: 'root',
})

export class LoginService {

  public user!: User;
  public users: User[] = [
    {id: "1", email: "manoelriosneto@gmail.com", senha: "123456", grupo: "Gerente", nome: "Manoel"}
  ];

  public authenticated: boolean = false;

  constructor(private route: Router) {}

  logar(user: User){
    const userAtual = this.users.find(user => user.email === user.email)
    if(userAtual && user.senha === userAtual.senha) {
      this.authenticated = true;
      this.user = userAtual;
      this.route.navigate(['/pedidos']);
    }
    else {this.authenticated = false;}
  }

  criarUser(user: User){
    this.user = user;
    this.users.push(user)
  }


}
