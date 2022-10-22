import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements AfterViewInit {

  displayedColumns: string[] = ['id', 'userName', 'name', 'email', 'status', 'grupo'];
  dataSource = new MatTableDataSource<Funcionario>(funcionarios);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() { 
    this.dataSource.paginator = this.paginator;
  }

  //Aplica filtro com todos atributos
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

export interface Funcionario {
  id: number;
  userName: string;
  name: string;
  email: string;
  status: boolean;
  grupo: string;
}

const funcionarios: Funcionario[] =[
  { id: 1, userName: "Wisley", name: "Wisley Aquino", email: "wisley@gmail.com", status: true, grupo: "Gerente" },
  { id: 2, userName: "Manual", name: "Manual Rios", email: "manual@gmail.com", status: false, grupo: "Cozinha" },
  { id: 3, userName: "Jpog", name: "Jpog Barbosa", email: "jpog@gmail.com", status: true, grupo: "Gerente" },
  { id: 4, userName: "Renault", name: "Renault Pedroso", email: "ren@gmail.com", status: false, grupo: "Garçom" },
  { id: 4, userName: "Renault", name: "Renault Pedroso", email: "ren@gmail.com", status: false, grupo: "Garçom" },
  { id: 4, userName: "Renault", name: "Renault Pedroso", email: "ren@gmail.com", status: false, grupo: "Garçom" },
  { id: 4, userName: "Renault", name: "Renault Pedroso", email: "ren@gmail.com", status: false, grupo: "Garçom" }
];

