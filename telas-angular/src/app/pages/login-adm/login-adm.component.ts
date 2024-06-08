import { Component } from '@angular/core';
import { UsuarioService } from '../../services/usuarios.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-adm',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-adm.component.html',
  styleUrl: './login-adm.component.scss'
})
export class LoginAdmComponent {
  usuario!:string
  senha!:string

  constructor(private usuarioService:UsuarioService,private router:Router){}

  login(){
    this.usuarioService.GetLogin(this.usuario, this.senha).subscribe(response =>
      {
        const status = response.status;
        if(status === 200)
          {
            console.log("login Bem Sucedido")
            this.router.navigate(['admin/home'])
          }
      
      }
    )
  }
  sair(){
    this.router.navigate([''])
  }
}
