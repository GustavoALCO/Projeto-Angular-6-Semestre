import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../../services/produtos.service';
import { UsuarioService } from '../../services/usuarios.service';
import { Produtos } from '../../models/Produtos';
import { Usuario } from '../../models/Usuario';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  produtos:Produtos[] = [];
  usuarios: Usuario[] = [];

  constructor( private ProdutosService: ProdutosService, private UsuarioService: UsuarioService){

  }
  ngOnInit(): void {
    
  
    
  }
}
