import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.scss']
})
export class CardapioComponent implements OnInit {

  public title = 'Cardápio';

  pratoSelected!: string;

  public pratos = [
    { id:1, nome:'Batata', desc: 'Batata com cheddar e bacon', valor: 35},
    { id:2, nome:'Batata', desc: 'Batata com cheddar e bacon', valor: 35},
    { id:3, nome:'Batata', desc: 'Batata com cheddar e bacon', valor: 35},
    { id:4, nome:'Batata', desc: 'Batata com cheddar e bacon', valor: 35},
    { id:5, nome:'Batata', desc: 'Batata com cheddar e bacon', valor: 35},
    { id:6, nome:'Batata', desc: 'Batata com cheddar e bacon', valor: 35},
    { id:7, nome:'Batata', desc: 'Batata com cheddar e bacon', valor: 35},
    { id:8, nome:'Batata', desc: 'Batata com cheddar e bacon', valor: 35}
  ]

  pratoSelect(prato: any){
    this.pratoSelected = prato.nome;
  }

  voltar(){
    this.pratoSelected = '';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
