import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Produtos } from '../models/Produtos';
import { response } from 'express';
import { error } from 'console';
@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private apiUrl = `${environment.Apiurl}/Produtos`
  

  constructor(private http: HttpClient) {}

    GetProdutos() {
      const url = this.apiUrl + "/BuscarProdutos";
      return this.http.get<Produtos[]>(url);
    }
    // fazendo Solicitação para a Api sobre todos os produtos

    GetProdutoID(IdProduto: string) {
      const url = this.apiUrl + `/BuscarProdutosPorID/${IdProduto}`;
      return this.http.get<Produtos[]>(url);
    }

    GetProdutoIdArray(IdProduto: string) {
      const url = this.apiUrl + `/BuscarProdutosPorID/${IdProduto}`;
      return this.http.get<Produtos[]>(url);
    }
    
    GetProdutoNome(produto: string) {
      const url = this.apiUrl + `/BuscarProdutosPorNome/${produto}`;
      return this.http.get<Produtos[]>(url)
    }
    
    DeleteProdutoID(IdProduto:string){
      const url = this.apiUrl + `/DeletarProdutosPor/${IdProduto}`;
      return this.http.delete<Produtos[]>(url).subscribe(
        (response)=> console.log("usuario excluido Com sucesso")
      )
    }

    PostProdutos(produto: string[], descricao: string[], preco: number[], imagem: string[]){
      const url = this.apiUrl + `/CriarProdutos`;
      const body = {
        imagem: imagem,
        produto: produto,
        descricao: descricao,
        preco: preco
      };
      // Realiza a solicitação POST e se inscreve na Observable retornada
      return this.http.post<Produtos[]>(url, body)
      
      .subscribe(
        (response) => {
          console.log('Produto criado com sucesso:', response);
          // retorna que o produto foi criado com sucesso
        },
        (error) => {
          console.error('Erro ao criar produto:', error);  
        }
      );

    }
    

    PutProdutos(Idprodutos: string, produtos: string[], descricao: string[], preco: number[],imagem:string[])
    {
      const url = this.apiUrl + `/AlterarProduto/${Idprodutos}`;
      const body = {
        produtos: produtos,
        descricao: descricao,
        preco: preco,
        imagem: imagem
      }
      return this.http.put<Produtos[]>(url,body)

      //Subscribe para retronar o produto no console 

      // . subscribe(
      //   (response) => {
      //     console.log('Produto Alterado com Sucesso:', response);
      //   },
      //   (error) => {
      //     console.error('Erro ao criar produto:', error);
      //   }
      // )
    }
}
