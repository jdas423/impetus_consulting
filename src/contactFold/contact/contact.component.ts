import { Component,Input } from '@angular/core';
import { ContactImgComponent } from '../components/contact-img/contact-img.component';
import { BackgroundColorDirective } from '../../directives/backgroundColor/background-color.directive';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactImgComponent,BackgroundColorDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  @Input() email: string = "";
  @Input() location: string = "";
  @Input() phoneNumber: string = "";
  constructor() {
  }
}
