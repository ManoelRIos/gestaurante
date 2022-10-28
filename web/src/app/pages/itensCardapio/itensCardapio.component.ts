import { ItemCardapio } from './../../models/ItemCardapio';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-itensCardapio',
  templateUrl: './itensCardapio.component.html',
  styleUrls: ['./itensCardapio.component.scss']
})
export class ItensCardapioComponent implements OnInit {

  itensDoCardapio: ItemCardapio[] =[
    { id: "1", nome: "X-Salada", descricao: "Wisley Aquino", preco: 15, quantidade: 4, imagem: "Gerente", categoria:"Burger" },
    { id: "2", nome: "X-Tudo", descricao: "Manual Rios", preco: 20, quantidade: 2, imagem: "Cozinha", categoria:"Burger" },
    { id: "3", nome: "Coca-cola (lata)", descricao: "4.50", preco: 40.50, quantidade: 5, imagem: "Gerente", categoria:"Bebida" },
    { id: "4", nome: "Guaraná (2 Litros)", descricao: "8", preco: 8, quantidade: 10, imagem: "Garçom", categoria:"Bebida" },
    { id: "5", nome: "Cuscus", descricao: "Renault Pedroso", preco: 100.99, quantidade: 5, imagem: "Garçom", categoria:"Burger" },
    { id: "6", nome: "Batata Frita", descricao: "Renault Pedroso", preco: 7.99, quantidade: 2, imagem: "Garçom", categoria:"Porção" },
    { id: "7", nome: "T-Bone", descricao: "Renault Pedroso", preco: 220, quantidade: 3, imagem: "Garçom", categoria:"Carne" }
  ];

  displayedColumns: string[] = ['id', 'nome', 'preco', 'quantidade', 'categoria'];
  dataSource = new MatTableDataSource<ItemCardapio>(this.itensDoCardapio);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
