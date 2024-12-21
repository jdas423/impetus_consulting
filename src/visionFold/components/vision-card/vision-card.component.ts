import { Component } from '@angular/core';
import { BackgroundColorDirective } from '../../../directives/backgroundColor/background-color.directive';

@Component({
  selector: 'app-vision-card',
  standalone: true,
  imports: [BackgroundColorDirective],
  templateUrl: './vision-card.component.html',
  styleUrl: './vision-card.component.css'
})
export class VisionCardComponent {

}
