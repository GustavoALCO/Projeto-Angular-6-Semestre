  import { Component } from '@angular/core';
  import { StorageService } from '../../services/storage.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

  @Component({
    selector: 'app-card-shop',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './card-shop.component.html',
    styleUrl: './card-shop.component.scss'
  })
  export class CardShopComponent {

    mostrarCarrinho: boolean = false;

    constructor(private localStorageService: StorageService) { }

    ngOnInit(): void {
      if (this.localStorageService.getId().length > 0) {
        this.mostrarCarrinho = true;  
      }
    }
  }
