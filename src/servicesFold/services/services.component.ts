import { Component,Input,OnInit } from '@angular/core';
import { ServiceCardComponent } from '../components/service-card/service-card.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ServiceCardComponent,CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements OnInit {
   @Input() servicesCardNo:number=0;
   @Input() servicesHeading:string="";
   @Input() servicesCardHeadings:Array<string>=[];
   @Input() servicesCardContent:Array<string>=[];
   @Input() imgAdd:Array<string>=[];
   public resolveImgClasses:Array<string>=[]
   ngOnInit(): void {
      for(let img of this.imgAdd){
        this.resolveImgClasses.push(`url(${img})`)
      }
   }
}
