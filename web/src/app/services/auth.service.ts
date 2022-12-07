import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const LS_CHAVE: string = "usuarioLogado";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

//   public usuarioLogado(){

//   }

//  public set login(){

//   }

  logout(){
    delete localStorage[LS_CHAVE];
  }
}
