import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RouterLink } from '@angular/router';
import { ProdutosService } from '../../../services/produtos.service';

@Component({
  selector: 'app-dialog-adm',
  standalone: true,
  imports: [FormsModule,
     RouterLink,
     CommonModule],
  templateUrl: './dialog-adm.component.html',
  styleUrl: './dialog-adm.component.scss'
})
export class DialogAdmComponent {

  id!:string
  camposPreenchidos: boolean = false

  constructor(public dialogRef: MatDialogRef<DialogAdmComponent>,@Inject(MAT_DIALOG_DATA) public data: any,
   private ProdutosService: ProdutosService ){}

  ngOnInit(){
    console.log(this.data.funcao)
  }

  verificar(){
    this.camposPreenchidos = this.id !== undefined
  }

  deletar()
  {
    this.ProdutosService.DeleteProdutoID(this.id)
    alert(`Usuario ${this.id} Foi excluido`)
    this.dialogRef.close()
  }
  close(){
    this.dialogRef.close()
  }
  
}
