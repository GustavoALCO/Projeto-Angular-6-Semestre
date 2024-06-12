import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../../services/produtos.service';
import { Produtos } from '../../models/Produtos';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';

import { HeaderComponent } from '../header/header.component';
import { CardShopComponent } from '../card-shop/card-shop.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cardapio',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    RouterLink,
    HeaderComponent,
    CardShopComponent
  ],
  templateUrl: './cardapio.component.html',
  styleUrl: './cardapio.component.scss'
})
export class CardapioComponent {

  produtosPizza:Produtos[] = [];
  produtosBebidas:Produtos[] = [];
  

  constructor( private ProdutosService: ProdutosService){

  }

  ngOnInit(): void {
    this.obterPizzas(),
    this.obterBebidas()
  }

  obterPizzas(){
    this.ProdutosService.GetProdutoNome("pizza")
    .subscribe(produtosPizza => this.produtosPizza = produtosPizza);
    }
  
    obterBebidas(){
      this.ProdutosService.GetProdutoNome("refrigerante")
      .subscribe(produtosBebidas => this.produtosBebidas = produtosBebidas);
      }
}
