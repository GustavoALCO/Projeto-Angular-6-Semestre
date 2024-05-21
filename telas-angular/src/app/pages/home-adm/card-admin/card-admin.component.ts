import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-admin',
  standalone: true,
  imports: [],
  templateUrl: './card-admin.component.html',
  styleUrl: './card-admin.component.scss'
})
export class CardAdminComponent {

  @Input()
  imagem:string = '';

  @Input()
  texto:string = '';
}
