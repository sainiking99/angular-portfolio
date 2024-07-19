import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink,CommonModule,MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'saini';
}
