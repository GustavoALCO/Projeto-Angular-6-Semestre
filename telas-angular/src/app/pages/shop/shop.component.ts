import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { Produtos, precoProdutos } from '../../models/Produtos';
import { ProdutosService } from '../../services/produtos.service';
import { LocalStorageService } from '../../services/localstorage.service';
import { CommonModule } from '@angular/common';
import { CardShopComponent } from './card-shop/card-shop.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog'
import { DialogEnderecoComponent } from './dialog-endereco/dialog-endereco.component';
import { ContadorService } from '../../services/contador.service';
import {MatIconModule} from '@angular/material/icon';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [HomeComponent,
     CommonModule,
    CardShopComponent, 
    MatDialogModule, 
    MatIconModule, 
    RouterLink],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent {
  produtos:Produtos[] = [];
  vf:number = 0
  preco:precoProdutos[] = []
  contador: number = 1;

  constructor( private ProdutosService: ProdutosService,
     private localstorage: LocalStorageService,
      public dialog: MatDialog,
      private contadoreService: ContadorService){

  }

  ngOnInit():void{
    this.obterProdutos();
    this.receberPrecoFinal
    
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogEnderecoComponent, {
      width: '500px',
      height: '500px',
      data: {
        vf: this.vf,
        contador: this.contador
      }
    });
  }


  atualizarContador(idProduto: string, novoValor: number) {
    this.contadoreService.atualizarContador(idProduto, novoValor)
  }

  receberPrecoFinal(idProduto: string, preco: number) {
    const index = this.produtos.findIndex(produto => produto.idProduto === idProduto);
    console.log("Está vindo aqui");
    if (index !== -1) {    
      this.produtos[index].preco = preco; 
      console.log("Entrou");
    } 
    this.vf = this.produtos
      .filter(item => typeof item.preco === 'number')
      .reduce((acc, item) => acc + item.preco, 4);
    console.log(this.vf);
  }
  
  

  obterProdutos(): void {
    // Obter os IDs do Local Storage
    const ids = this.localstorage.getId();
  
    // Array para armazenar os produtos
    const produtosTemp: Produtos[] = [];
  
    ids.forEach(id => {
      this.ProdutosService.GetProdutoID(id)
        .subscribe(produtos => {
          // Adicionar os produtos retornados ao array temporário
          produtosTemp.push(...produtos);
  
          // Verificar se todas as chamadas foram concluídas
          if (produtosTemp.length === ids.length) {
            this.produtos = produtosTemp;
          }
        });
    });
  }
}

