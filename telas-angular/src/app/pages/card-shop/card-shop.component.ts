  import { Component } from '@angular/core';
  import { LocalStorageService } from '../../services/localstorage.service';
import { CommonModule } from '@angular/common';

  @Component({
    selector: 'app-card-shop',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './card-shop.component.html',
    styleUrl: './card-shop.component.scss'
  })
  export class CardShopComponent {

    mostrarCarrinho: boolean = false;

    constructor(private localStorageService: LocalStorageService) { }

    ngOnInit(): void {
      if (this.localStorageService.getId().length > 0) {
        this.mostrarCarrinho = true;  
      }
    }
  }
