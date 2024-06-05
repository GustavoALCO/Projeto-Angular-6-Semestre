import { Component } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { ProdutosService } from '../../services/produtos.service';
import { Produtos } from '../../models/Produtos';
import { CommonModule} from '@angular/common';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-list-adm',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatDividerModule,
    MatTableModule,
  ],
  templateUrl: './list-adm.component.html',
  styleUrl: './list-adm.component.scss'
})
export class ListAdmComponent {
  displayedColumns: string[] = ['idProduto', 'produto', 'descricao', 'preco'];
  Listaprodutos!: Produtos[];
  dataSource = new MatTableDataSource<Produtos>();
  produtos!: Produtos[]
  lista: Observable<boolean>;
  ngOnInit(){
    this.lista = of(false)
    this.obterProdutos()
   
  }

  constructor(private produtosServices: ProdutosService, ){
    this.lista = of(false)
  }
  
  obterProdutos(){
    this.produtosServices.GetProdutos()
    .subscribe( produto => 
      {this.Listaprodutos = produto;
        this.dataSource.data = this.Listaprodutos; 
      });
  }
  
  clickColuna(row:any){
    //console.log('Row clicked: ', row);
    this.listTrue();

    const idProduto = row.idProduto
    const produto = row.produto
    const descricao = row.descricao
    const preco = row.preco
    const imagem = row.imagem
    this.produtos = [
      { idProduto : `${idProduto}`,
        produto: `${produto}`,
        descricao: `${descricao}`,
        preco: preco,
        imagem: `${imagem}` 
      }
      ];
  }

  listTrue(){
    this.lista = of(true);
    
  }
}
