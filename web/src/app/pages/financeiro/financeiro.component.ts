import { Component, OnInit, ViewChild } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexFill, ApexMarkers, ApexStroke, ApexTitleSubtitle, ApexXAxis } from 'ng-apexcharts';

class Vendas{
  x: string[] = ['jan', 'fev', 'mar', 'abr', 'mai'];
  y: number = 0;
}

@Component({
  selector: 'app-financeiro',
  templateUrl: './financeiro.component.html',
  styleUrls: ['./financeiro.component.scss'],
})
export class FinanceiroComponent implements OnInit {

  isPrice = true;

  series!: ApexAxisChartSeries;
  chart!: ApexChart;
  title!: ApexTitleSubtitle;
  xaxis!: ApexXAxis;
  stroke!: ApexStroke;
  fill!: ApexFill;
  markers!: ApexMarkers;
  colors!: string[];

  dia = new Date().getDate();
  mes = new Date().getMonth();
  ano = new Date().getFullYear();
  vendas = [
    {x: String(`${this.dia -6}/${this.mes}/${this.ano}`) , y: 1500},
    {x: String(`${this.dia -5}/${this.mes}/${this.ano}`) , y: 1300},
    {x: String(`${this.dia -4}/${this.mes}/${this.ano}`) , y: 2000},
    {x: String(`${this.dia -3}/${this.mes}/${this.ano}`) , y: 1000},
    {x: String(`${this.dia -2}/${this.mes}/${this.ano}`) , y: 1000},
    {x: String(`${this.dia -1}/${this.mes}/${this.ano}`), y: 1500},
    {x: String(`${this.dia}/${this.mes}/${this.ano}`), y: 3000},
  ]
  
  totalVendas: number = 0;

  ngOnInit(){
    this.totalVendasMes();
    this.initializeChartOptions();
  }

  constructor() {  }

  totalVendasMes () {
    var anoAtual = new Date().getFullYear()
    var mesAtual = new Date().getMonth()
    var diaAtual =  new Date().getDate()
    var dataAtual = new Date(anoAtual, mesAtual, diaAtual)
    var mes = dataAtual.toLocaleDateString('default', {month: "long"}) 
    for(let venda of this.vendas){
      console.log("TOTAL VENDA:")
      console.log(this.totalVendas)
      console.log("VENDA Y:")
      console.log(venda.y)
      this.totalVendas  += venda.y
    } 
  }

  initializeChartOptions() {

      this.title = {
        text: "Receitas X Data",
        align: "center",
        style: {
          fontSize: "20px",
          color: "#060408",
          fontWeight: "regular",
          fontFamily: "Poppins"
        }
      }

      this.series = [{
        name: 'Lucro',
        data: this.vendas
      }]

      this.chart = {
        type: 'bar',
        width: '90%',
        height: '311px',
        background: "#fff",
      }

      this.colors = ["#00CE08"],

      this.stroke = {
        width: 7,
        curve: "smooth"
      }

      this.fill = {
        type: "color",

      }

     

      this.markers = {
        size: 5,
        colors: ["#00CE08"],
        hover: {
          size: 7
        }
      }
  };
}
