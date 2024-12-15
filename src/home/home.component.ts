import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { HomePageComponent } from '../home-page/home-page/home-page.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,HomePageComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 
}
