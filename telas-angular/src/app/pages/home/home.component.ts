import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { StorageService } from '../../services/storage.service';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent{

  constructor(private teste:StorageService){

  }
 
  adicionar(){
    this.teste.adicionarId("6409F0B5-2554-4163-94AE-B8526FFE5BFE")
  }
 
}
