import { Component } from '@angular/core';
import { CardAdminComponent } from './card-admin/card-admin.component';

@Component({
  selector: 'app-home-adm',
  standalone: true,
  imports: [CardAdminComponent],
  templateUrl: './home-adm.component.html',
  styleUrl: './home-adm.component.scss'
})
export class HomeAdmComponent {

}
