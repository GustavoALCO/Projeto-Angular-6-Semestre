import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produtos } from '../../models/Produtos';
import { ProdutosService } from '../../services/produtos.service';
import { CommonModule } from '@angular/common';
import { log } from 'console';
import { ShopCardComponent } from '../shop-card/shop-card.component';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [CommonModule, ShopCardComponent],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss'
})
export class InfoComponent implements OnInit {
  id:string = '';

  produtos:Produtos[] = [];

  constructor(private route: ActivatedRoute, private ProdutosService: ProdutosService) 
  {

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['idProduto'];
      // Agora você pode usar this.id para acessar o valor do parâmetro id
      this.obterProduto()
    })
  }

  obterProduto() {
    this.ProdutosService.GetProdutoID(this.id)
    .subscribe(produtos => {
      console.log('Informações do produto:', produtos);
      this.produtos = produtos;
    });
  };
}


