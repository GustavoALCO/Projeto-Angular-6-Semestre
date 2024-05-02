import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
@Input()
idProduto:string = '';

@Input()
imagem:string = '';

@Input()
produto:string = '';

@Input()
descricao:string = '';

@Input()
preco:string = "";
}
