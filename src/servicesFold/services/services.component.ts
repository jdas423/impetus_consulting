import { Component,Input,OnInit } from '@angular/core';
import { ServiceCardComponent } from '../components/service-card/service-card.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ServiceCardComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements OnInit {
   @Input() servicesCardNo:number=0;
   @Input() servicesHeading:string="";
   @Input() servicesCardHeadings:Array<string>=[];
   @Input() servicesCardContent:Array<string>=[];
   ngOnInit(): void {
     console.log(this.servicesCardContent)
   }
}
