import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProdutosService } from '../../services/produtos.service';
import { Observable, Subscriber} from 'rxjs';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Produtos } from '../../models/Produtos';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-input-admin',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
    CommonModule,
  ],
  templateUrl: './input-admin.component.html',
  styleUrl: './input-admin.component.scss'
})

export class InputAdminComponent {
  titulo!:string[] ;
  descricao!:string[];
  preco!:number[] ;
  foto!:Observable<any>;
  base64!:any
  id!: string
  camposPreenchidos: boolean = false;
  produtos!: Produtos[]
  rotaAtual:any

  constructor(private serviceProdutos: ProdutosService, private route: ActivatedRoute, private http: HttpClient, private activatedRoute: ActivatedRoute)
  {}

  required(){
    this.camposPreenchidos = this.titulo !== undefined && this.descricao !== undefined && this.preco !== undefined  
    
  }
  ngOnInit(): void {
    this.rotaAtual = this.activatedRoute.snapshot.url[1].path;
    if(this.rotaAtual === 'alterarProduto')
    this.route.params.subscribe(params => {
      this.id = params['idProduto'];
      this.obterProduto()
      
      //usa o parametro que foi passado na url para buscar o objeto
    }
    )
    else{
      this.produtos = [
        { idProduto :'',
          produto: 'Digite o Nome do Produto...',
          descricao: 'Digite a Descricao...',
          preco: 0,
          imagem: '' 
        }
        ];
      
    }     
  }

  obterProduto() {
    this.serviceProdutos.GetProdutoID(this.id)
    .subscribe(produtos => {
      this.produtos = produtos;
      this.titulo = this.produtos.map(produtos => produtos.produto);
      this.descricao = this.produtos.map(produtos => produtos.descricao);
      this.preco = this.produtos.map(produtos => produtos.preco);
      this.base64 = this.produtos.map(produtos => produtos.imagem)
      
      this.convertUrlToBase64(this.base64.toString())
    });
  };

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
      this.foto = d
      this.base64 = d
    })
  }

  convertUrlToBase64(url: string) {
    this.http.get(url, { responseType: 'blob' }).subscribe((blob) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        this.base64 = reader.result;
        console.log(this.base64);
      };
      reader.readAsDataURL(blob);
    });
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

  postProdutos(){
    this.serviceProdutos.PostProdutos(this.titulo, this.descricao, this.preco , this.base64)
  }

  putProdutos(){
    this.serviceProdutos.PutProdutos(this.id, this.titulo, this.descricao, this.preco , this.base64)
  }
}
