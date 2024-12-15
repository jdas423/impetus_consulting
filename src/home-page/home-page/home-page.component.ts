import { Component } from '@angular/core';
import { FontColorDirective } from '../../directives/fontColor/font-color.directive';
import { BackgroundColorDirective } from '../../directives/backgroundColor/background-color.directive';
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [FontColorDirective,BackgroundColorDirective],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
