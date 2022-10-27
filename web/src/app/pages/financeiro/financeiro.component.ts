import { Component, OnInit, ViewChild } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexFill, ApexMarkers, ApexStroke, ApexTitleSubtitle, ApexXAxis } from 'ng-apexcharts';

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

  vendas = [
    {x: 'jan', y: 10}
  ] 

  totalVendas () {
    var anoAtual = new Date().getFullYear()
    var mesAtual = new Date().getMonth()
    var diaAtual =  new Date().getDate()
    var dataAtual = new Date(anoAtual, mesAtual, diaAtual)
    var mes = dataAtual.toLocaleDateString('default', {month: "long"})    
  }



  ngOnInit(){
    this.totalVendas()
    this.initializeChartOptions();
  }
  constructor() {  }

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
        name: 'Receita',
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

      this.xaxis = {
        categories: ["Jan", "Fev",  "Mar",  "Abr",  "Mai",  "Jun",  "Jul",  "Ago", "Set", "Nov", "Dez"]
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
