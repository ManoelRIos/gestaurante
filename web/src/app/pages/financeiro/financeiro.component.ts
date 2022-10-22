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

  ngOnInit(){
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
        name: 'Values',
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
      }]

      this.chart = {
        type: 'line',
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
        categories: ["Jan", "Feb",  "Mar",  "Apr",  "May",  "Jun",  "Jul",  "Aug", "Sep"]
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
