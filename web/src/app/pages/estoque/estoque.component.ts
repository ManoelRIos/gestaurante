import { map } from 'rxjs/operators';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Produto } from '../../models/Produto';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { EstoqueService } from './estoque.service';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.scss'],
})
export class EstoqueComponent implements OnInit {
  public medidas = ['Und', 'Litros', 'Kg'];

  public modalRef?: BsModalRef;
  public produtoForm!: FormGroup;
  public titulo = 'Estoque';
  textSimple?: string;
  public produtoSelected?: null | Produto;
  public produtos: Produto[] = [];

  openModal(template: TemplateRef<any>, produto?: Produto) {
    this.modalRef = this.modalService.show(template);
    this.produtoSelected = produto;
  }

  constructor(
    private fb: FormBuilder,
    private modalService: BsModalService,
    private produtoService: EstoqueService
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.carregarProdutos();
  }

  carregarProdutos() {
    this.produtoService.getAll().subscribe(
      (produtos: Produto[]) => {
        this.produtos = produtos;
      },
      (erro: any) => {
        console.log(erro);
      }
    );
  }

  createForm() {
    this.produtoForm = this.fb.group({
      id: [],
      name: ['', Validators.required],
      qtd: ['', Validators.required],
      undMed: ['', Validators.required],
    });
  }
  criarProduto(produto: Produto) {
    this.produtoService.post(produto).subscribe(
      (retorno: any) => {
        console.log(retorno);
      },
      (erro: any) => {
        console.log(erro);
      }
    );
    console.log(this.produtoForm.value);
  }

  salvarProduto(produto: Produto) {
    this.produtoService.put(produto.id, produto).subscribe(
      (retorno: any) => {
        console.log(retorno);
        this.carregarProdutos();
      },
      (erro: any) => {
        console.log(erro);
      }
    );
  }
  deleteProduto(produto: Produto) {
    this.produtoService.delete(produto.id).subscribe(
      (retorno: any) => {
        console.log(retorno);
        this.voltar();
      },
      (erro: any) => {
        console.log(erro);
      }
    );
  }

  produtoSubmit() {
    console.log(this.produtoForm.value);
    this.salvarProduto(this.produtoForm.value);
    this.voltar();
  }

  produtoSelect(produto: Produto) {
    this.produtoSelected = produto;
    this.produtoForm.patchValue(produto);
  }

  addQtd(produto: Produto) {
    produto.qtd++;
    this.produtoService.put(produto.id, produto).subscribe();
  }

  removeQtd(produto: Produto) {
    produto.qtd--;
    this.produtoService.put(produto.id, produto).subscribe();
  }

  voltar() {
    this.produtoSelected = null;
  }
}
