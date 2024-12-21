import { Component } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { HomePageComponent } from '../components/home-page/home-page/home-page.component';
import { ConsultantImgComponent } from '../components/consultantImg/consultant-img/consultant-img.component';
import { BackgroundColorDirective } from '../../directives/backgroundColor/background-color.directive';
import { AboutUsComponent } from '../../aboutUsFold/about-us/about-us.component';
import { FontColorDirective } from '../../directives/fontColor/font-color.directive';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,HomePageComponent,ConsultantImgComponent,BackgroundColorDirective,
    AboutUsComponent, FontColorDirective
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 
}
