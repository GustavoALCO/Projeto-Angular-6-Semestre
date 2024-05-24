import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-admin',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card-admin.component.html',
  styleUrl: './card-admin.component.scss'
})
export class CardAdminComponent {

  @Input()
  imagem:string = '';

  @Input()
  texto:string = '';
  @Input()
  rota:string ='';
}
