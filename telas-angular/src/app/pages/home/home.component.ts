import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../../services/produtos.service';
import { Produtos } from '../../models/Produtos';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { CardShopComponent } from '../card-shop/card-shop.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CardComponent, RouterLink, HeaderComponent, CardShopComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  produtosPizza:Produtos[] = [];
  produtosBebidas:Produtos[] = [];
  

  constructor( private ProdutosService: ProdutosService){

  }

  ngOnInit(): void {
    this.obterPizzas(),
    this.obterBebidas()
  }

  obterPizzas(){
  this.ProdutosService.GetProdutoNome("excluir")
  .subscribe(produtosPizza => this.produtosPizza = produtosPizza);
  }

  obterBebidas(){
    this.ProdutosService.GetProdutoNome("teste")
    .subscribe(produtosBebidas => this.produtosBebidas = produtosBebidas);
    }
}
