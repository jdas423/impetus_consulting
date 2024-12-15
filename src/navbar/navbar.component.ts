import { Component } from '@angular/core';
import { BackgroundColorDirective } from '../directives/backgroundColor/background-color.directive';
import { UpperCasePipe, CommonModule,TitleCasePipe} from '@angular/common';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [BackgroundColorDirective,UpperCasePipe,CommonModule,TitleCasePipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
   constructor(){};
   public listItems:Array<string>=["About Us","Vision","Mission","Values","Services","Contact Us","Testimonials"];
}
