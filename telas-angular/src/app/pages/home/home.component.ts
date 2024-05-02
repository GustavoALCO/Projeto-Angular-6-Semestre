import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../../services/produtos.service';
import { Produtos } from '../../models/Produtos';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { ShopCardComponent } from '../shop-card/shop-card.component';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CardComponent, ShopCardComponent, RouterLink],
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
  this.ProdutosService.GetProdutoNome("Excluir")
  .subscribe(produtosPizza => this.produtosPizza = produtosPizza);
  }

  obterBebidas(){
    this.ProdutosService.GetProdutoNome("string")
    .subscribe(produtosBebidas => this.produtosBebidas = produtosBebidas);
    }
}
