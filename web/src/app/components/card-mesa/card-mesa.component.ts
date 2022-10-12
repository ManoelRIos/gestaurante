import { Component, OnInit } from '@angular/core';

interface Mesa {
  id: number;
  numeroMesa: number;
  assentos: number;
  status: boolean;
}

@Component({
  selector: 'app-card-mesa',
  templateUrl: './card-mesa.component.html',
  styleUrls: ['./card-mesa.component.scss']
})


export class CardMesaComponent implements OnInit {

  
  public mesas: Mesa[] = [
    { id: 1, numeroMesa: 1, assentos: 4, status: false},
    { id: 2, numeroMesa: 2, assentos: 8, status: true},
    { id: 3, numeroMesa: 3, assentos: 2, status: false},
    { id: 3, numeroMesa: 3, assentos: 2, status: false}
  ];
  
  public isSelected: boolean = false;
  
  public horaAbertura = new Date();

  currentStyle: Record<string, string> = {};

  setCurrentStyle(){
    this.currentStyle = {
      'background-color': false ?
       '#CF171D' : '#FFD152'
    }
  }

  setTime(time: Date){
    var horaAtual;
    horaAtual = time.getHours().toString().padStart(2, '0') + ':'
     + time.getMinutes().toString().padStart(2, '0');
    return horaAtual;
  }

  constructor() { }

  ngOnInit() {   
    this.setTime(this.horaAbertura);     
    this.setCurrentStyle();    
  }

}
