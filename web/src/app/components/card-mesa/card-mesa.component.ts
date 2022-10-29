import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-mesa',
  templateUrl: './card-mesa.component.html',
  styleUrls: ['./card-mesa.component.scss']
})

export class CardMesaComponent implements OnInit {

  @Input() numeroMesa!: number;
  @Input() assentos!: number;
  @Input() status!: boolean;
  
  public isSelected: boolean = false;
  
  public horaAbertura = new Date();

  currentStyle: Record<string, string> = {};

  setCurrentStyle(){
    this.currentStyle = {
      'background-color': this.status ?
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
