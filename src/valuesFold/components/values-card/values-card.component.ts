import { Component,Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UpperCasePipe } from '@angular/common';
import { library,dom} from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-values-card',
  standalone: true,
  imports: [FontAwesomeModule,UpperCasePipe],
  templateUrl: './values-card.component.html',
  styleUrl: './values-card.component.css'
})
export class ValuesCardComponent {
   @Input() heading:string="";
   @Input() body:string="";

   constructor(){
    library.add(fas,faCheck);
    dom.watch(); 
   }
}
