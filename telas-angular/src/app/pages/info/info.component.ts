import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produtos } from '../../models/Produtos';
import { ProdutosService } from '../../services/produtos.service';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from '../header/header.component';

import { StorageService } from '../../services/storage.service';


@Component({
  selector: 'app-info',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss',
})
export class InfoComponent implements OnInit {
  id:string = '';
  produtos:Produtos[] = []

  constructor(private route: ActivatedRoute, private ProdutosService: ProdutosService, private StorageService: StorageService) 
  {
    
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['idProduto'];
      this.obterProduto()
      //usa o parametro que foi passado na url para buscar o objeto
    })
  }
  
  obterProduto() {
    this.ProdutosService.GetProdutoID(this.id)
    .subscribe(produtos => {
      console.log('Informações do produto:', produtos);
      this.produtos = produtos;
    });
  };

  adicionar(id: string){
    this.StorageService.adicionarId(id);
  }
  
}


