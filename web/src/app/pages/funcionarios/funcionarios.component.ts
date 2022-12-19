import { LoginService } from './../../services/Login.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/models/User';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.scss']
})
export class FuncionariosComponent implements AfterViewInit  {

  
  displayedColumns: string[] = ['id', 'nome', 'email', 'grupo'];
  dataSource = new MatTableDataSource<User>(this.loginService.users);

  isEdit = false;
  isCreate = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(public loginService: LoginService) { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
   
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
