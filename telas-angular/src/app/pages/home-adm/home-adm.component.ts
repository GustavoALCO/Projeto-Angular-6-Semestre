import { Component } from '@angular/core';
import { CardAdminComponent } from './card-admin/card-admin.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { DialogAdmComponent } from './dialog-adm/dialog-adm.component';
import { MatDialog } from '@angular/material/dialog';

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

  constructor(public dialog: MatDialog,) {    
  }

  openDialog(funcao:string): void {
    const dialogRef = this.dialog.open(DialogAdmComponent, {
      width: '500px',
      height: '500px',
      data:{
        funcao: funcao
      }
    });
  }
}
