import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.scss']
})
export class CardapioComponent implements OnInit {

  //Validar se o login foi feito por um gerente
  @Input() isGerente: boolean = true;

  public title = 'Cardápio';

  pratoSelected!: string;
  public filterCardapio: boolean = false;
  public categoriaSelected: string = '';

  public cardapio = [
    { id:1, nome:'Batata', desc: 'Batata com cheddar e bacon', valor: 35, categoria: "Pizza"},
    { id:2, nome:'Batata', desc: 'Batata com cheddar e bacon', valor: 35, categoria: "Bebidas"},
    { id:3, nome:'Batata', desc: 'Batata com cheddar e bacon', valor: 35, categoria: "Sobremesas"},
    { id:4, nome:'Batata', desc: 'Batata com cheddar e bacon', valor: 35, categoria: "Porções"},
    { id:5, nome:'Batata', desc: 'Batata com cheddar e bacon', valor: 35, categoria: "Cervejas"},
    { id:6, nome:'Batata', desc: 'Batata com cheddar e bacon', valor: 35, categoria: "Destilados"},

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
