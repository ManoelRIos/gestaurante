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
  { id: 1, userName: "Wesley", name: "Wesley Aquino", email: "Wesley@gmail.com", status: true, grupo: "Gerente" },
  { id: 2, userName: "Manoel", name: "Manoel Rios", email: "Manoel@gmail.com", status: false, grupo: "Cozinha" },
  { id: 3, userName: "Joao", name: "Joao Barbosa", email: "Joao@gmail.com", status: true, grupo: "Gerente" },
  { id: 4, userName: "Renan", name: "Renan Pedroso", email: "renan@gmail.com", status: false, grupo: "Garçom" },
  { id: 4, userName: "Renan", name: "Renan Pedroso", email: "renan@gmail.com", status: false, grupo: "Garçom" },
  { id: 4, userName: "Renan", name: "Renan Pedroso", email: "renan@gmail.com", status: false, grupo: "Garçom" },
  { id: 4, userName: "Renan", name: "Renan Pedroso", email: "renan@gmail.com", status: false, grupo: "Garçom" },
  { id: 4, userName: "Renan", name: "Renan Pedroso", email: "renan@gmail.com", status: false, grupo: "Garçom" },
];

