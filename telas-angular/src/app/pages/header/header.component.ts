import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardShopComponent } from '../card-shop/card-shop.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,
    CardShopComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
