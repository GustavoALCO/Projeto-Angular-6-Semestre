import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/Usuario';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiUrl = `${environment.Apiurl}/Usuario`
  

  constructor(private http: HttpClient) {}

    GetUsuarios() {
      const url = this.apiUrl + "/BuscarUsuario";
      return this.http.get<Usuario[]>(url);
    }
   

    GetUsuarioID(IdProduto: string) {
      const url = this.apiUrl + `/BuscarUsuarioPorID/${IdProduto}`;
      return this.http.get<Usuario[]>(url);
    }
    
    GetUsuarioNome(email: string) {
      const url = this.apiUrl + `/BuscarUsuarioPorEmail/${email}`;
      return this.http.get<Usuario[]>(url)
    }

    GetLogin(email: string, senha: string)
    {
        const url = this.apiUrl + `/VerificarLogin/${email}/${senha}`
        return this.http.get(url, {observe: 'response'})
    }
    
    DeleteUsuarioID(IdProduto:string){
      const url = this.apiUrl + `/DeletarUsuarioPor/${IdProduto}`;
      return this.http.delete<Usuario[]>(url)
    }

    PostUsuario( Email: string, Senha: string, Genero: string, Endereco: string){
      const url = this.apiUrl + `/CriarUsuario`;
      const body ={
        Email: Email,
        Senha: Senha,
        Genero: Genero,
        Endereco: Endereco
      }
      return this.http.post<Usuario[]>(url,body);
    }

    PutUsuario(IdUsuario: string, Email: string, Senha: string, Genero: string, Endereco: string)
    {
      const url = this.apiUrl + `/AlterarProduto/${IdUsuario}`;
      const body = {
        Email: Email,
        Senha: Senha,
        Genero: Genero,
        Endereco: Endereco
      }
      return this.http.put<Usuario[]>(url,body)
    }
}
