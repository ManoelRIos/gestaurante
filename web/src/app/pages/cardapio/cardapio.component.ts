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
    { id:1, nome:'Batata', desc: 'Batata com cheddar e bacon', valor: 35, category: "Pizza"},
    { id:2, nome:'Batata', desc: 'Batata com cheddar e bacon', valor: 35, category: "Bebidas"},
    { id:3, nome:'Batata', desc: 'Batata com cheddar e bacon', valor: 35, category: "Sobremesas"},
    { id:4, nome:'Batata', desc: 'Batata com cheddar e bacon', valor: 35, category: "Porções"},
    { id:5, nome:'Batata', desc: 'Batata com cheddar e bacon', valor: 35, category: "Cervejas"},
    { id:6, nome:'Batata', desc: 'Batata com cheddar e bacon', valor: 35, category: "Destilados"},

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
