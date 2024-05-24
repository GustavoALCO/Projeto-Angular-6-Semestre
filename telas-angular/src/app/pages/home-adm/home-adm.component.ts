import { Component } from '@angular/core';
import { CardAdminComponent } from './card-admin/card-admin.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-adm',
  standalone: true,
  imports: [CardAdminComponent,
    MatIconModule,
    RouterLink
  ],
  templateUrl: './home-adm.component.html',
  styleUrl: './home-adm.component.scss'
})
export class HomeAdmComponent {

}
