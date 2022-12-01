import { ItemCardapio } from './../../models/ItemCardapio';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ItemCardapioService } from '../../services/itemCardapio.service';

@Component({
  selector: 'app-itensCardapio',
  templateUrl: './itensCardapio.component.html',
  styleUrls: ['./itensCardapio.component.scss']
})
export class ItensCardapioComponent implements OnInit {
  itensDoCardapio: ItemCardapio[] = []
  isCreate = false;

  dataSource!:MatTableDataSource<ItemCardapio>
  
  displayedColumns: string[] = ['id', 'nome', 'preco', 'quantidade', 'categoria', 'action'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  constructor(
    private itemCardapioService : ItemCardapioService
  ) { 
    this.carregarItensCardapio();
    console.log(this.itensDoCardapio)
  }

  ngOnInit() {
    console.log(this.itensDoCardapio)

    this.dataSource.paginator = this.paginator;
  }

  carregarItensCardapio(): any{
    this.itemCardapioService.getAll().subscribe(
      (itemCardapio: ItemCardapio[]) => {
        this.itensDoCardapio = itemCardapio;
        this.dataSource = new MatTableDataSource<ItemCardapio>(this.itensDoCardapio);
      }
    ),
    (error: any) => {
      console.error(error);
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
