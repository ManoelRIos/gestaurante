import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-item-cardapio',
  templateUrl: './card-item-cardapio.component.html',
  styleUrls: ['./card-item-cardapio.component.scss']
})
export class CardItemCardapioComponent implements OnInit {

  @Input() imagem?: string;
  @Input() nome!: string;
  @Input() descricao?: string;
  @Input() preco!: number; 

  constructor() { }

  ngOnInit() {
  }

}
