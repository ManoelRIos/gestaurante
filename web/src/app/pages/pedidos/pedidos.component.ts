import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent implements OnInit {

  public title = 'Pedidos';

  public pedidos = [
    { id:1, nome:'Batata', desc: 'Batata com cheddar e bacon', valor: 35},
    { id:2, nome:'Hambúrguer', desc: 'Burguer caseiro de 260g com molho da casa', valor: 60.99},
    { id:3, nome:'Coca-cola', desc: 'coca-gelada na hora com gelo seco', valor: 35},
    { id:4, nome:'Guaraná', desc: 'guaraná natu',valor: 3.50 },
    { id:5, nome:'Coxinha', desc: 'coxinha de frango feita no óleo de onte' , valo: 6 }
  ];

  

  constructor() { }

  ngOnInit(): void {
  }

}
