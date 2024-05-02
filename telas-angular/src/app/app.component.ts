import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './pages/info/info.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
  HomeComponent,
InfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'telas-angular';
}
