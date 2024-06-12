import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { LocalStorageService } from '../../services/localstorage.service';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent{

  constructor(private localStorage:LocalStorageService){

  }
 
  adicionar(){
    this.localStorage.adicionarId("35e111ec-cc52-415d-a489-9ccc4db76d2e")
  }
 
}
