import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-numeric-info',
  templateUrl: './card-numeric-info.component.html',
  styleUrls: ['./card-numeric-info.component.scss']
})

export class CardNumericInfoComponent implements OnInit {

  @Input () text?: string;
  @Input () value?: string;
  @Input () color: string = "black";

  currentStyle: Record<string, string> = {};

  setCurrentStyle(){
    this.currentStyle = {
      'color': this.color
    }
  }

  constructor() { }

  ngOnInit() {
    this.setCurrentStyle();
  }

}
