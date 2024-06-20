import { Component, EventEmitter, Input, Output, output} from '@angular/core';
import { StorageService } from '../../../services/storage.service';
import { get } from 'http';


@Component({
  selector: 'app-card-shop',
  standalone: true,
  imports: [],
  templateUrl: './card-shop.component.html',
  styleUrl: './card-shop.component.scss'
})
export class CardShopComponent {
  contador:number = 1
 static valor: number
  valor:number = 1

  @Input()
  idProduto:string = '';
  
  @Input()
  imagem:string = '';
  
  @Input()
  produto:string = '';
  
  @Input()
  descricao:string = '';
  
  @Input()
  preco:number = 0;

  @Output()
  precoFinal = new EventEmitter<number>();
  //passando o valor do filho para o pai 
  @Output()
   contadorAtualizado = new EventEmitter<number>();

  constructor(private storage: StorageService){

  }
  ngOnInit(): void {
   this.valor = this.preco 
   this.precoFinal.emit(this.preco);
  }
  
  adicionar(){
    if(this.contador < 10){
    this.contador ++
    this.contadorAtualizado.emit(this.contador);
    this.preco += this.valor
    this.precoFinal.emit(this.preco);
    
    }
  }

  subtrair(id: string){
    this.contador --
    this.contadorAtualizado.emit(this.contador);
    this.preco -= this.valor
    this.precoFinal.emit(this.preco);
    
    if(this.contador < 1){
      this.storage.removerId(id)
    }
  }

  
}
