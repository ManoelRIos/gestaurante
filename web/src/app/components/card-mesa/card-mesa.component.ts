import { Component, Input, OnInit } from '@angular/core';
import { Mesa } from 'src/app/models/Mesa';

@Component({
  selector: 'app-card-mesa',
  templateUrl: './card-mesa.component.html',
  styleUrls: ['./card-mesa.component.scss']
})

export class CardMesaComponent implements OnInit {

  @Input() mesa!: Mesa;
  
  public isSelected: boolean = false;
  
  public horaAbertura = new Date();

  currentStyle: Record<string, string> = {};

  setCurrentStyle(){
    this.currentStyle = {
      'background-color': this.mesa.conta ?
       '#CF171D' : '#FFA81E'
    }
  }

  setTime(time: Date){
    var horaAtual;
    if(this.mesa.conta){
      var hour = this.mesa.conta.horaAbertura.getHours()
      var minutes = this.mesa.conta.horaAbertura.getMinutes()
      horaAtual = `${hour}:${minutes}`
      return horaAtual;
    } 
    return "00:00"
   /*  horaAtual = time.getHours().toString().padStart(2, '0') + ':'
     + time.getMinutes().toString().padStart(2, '0'); */
  }

  constructor() { }

  ngOnInit() {   
    this.setTime(this.horaAbertura);     
    this.setCurrentStyle();    
  }

}
