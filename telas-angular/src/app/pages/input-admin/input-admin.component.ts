import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProdutosService } from '../../services/produtos.service';
import { Observable, Subscriber } from 'rxjs';
import { subscribe } from 'diagnostics_channel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input-admin',
  standalone: true,
  imports: [FormsModule,
    CommonModule
  ],
  templateUrl: './input-admin.component.html',
  styleUrl: './input-admin.component.scss'
})
export class InputAdminComponent {
  produto:string= '';
  descricao:string='';
  preco!:number ;
  foto!:Observable<any>;
  base64!:any

  camposPreenchidos: boolean = false;

  constructor(private serviceProdutos: ProdutosService)
  {}

  required(){
    this.camposPreenchidos = this.produto !== '' && this.descricao !== '' && this.preco !== undefined  
    
  }
  onChange = ($event:Event) =>{
   const target = $event.target as HTMLInputElement;

    const file: File = (target.files as FileList)[0];

    console.log(file)

    this.convertToBase64(file)
  }

  convertToBase64(file: File)
  {
    const observable = new Observable((subscribe:Subscriber<any>) =>{
      this.readFile(file,subscribe)
    })

    observable.subscribe((d) => {
      console.log(d)
      this.foto = d.base64
      this.base64 = d.base64
    })
  }

  readFile(file: File, subscriber: Subscriber<any>){
    const filereader = new FileReader();

    filereader.readAsDataURL(file)

    filereader.onload = () => {
      subscriber.next(filereader.result)

      subscriber.complete()
    }

    filereader.onerror = () => {
      subscriber.error()
      subscriber.complete()
    }
  }
  setProdutos(){
    this.serviceProdutos.PostProdutos(this.produto, this.descricao, this.preco , this.base64)
    
  }
}
