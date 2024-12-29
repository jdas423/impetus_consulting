import { AfterViewInit, Component,ElementRef,Input,OnInit } from '@angular/core';
import { ServiceCardComponent } from '../components/service-card/service-card.component';
import { CommonModule } from '@angular/common';
import {trigger,state,style,animate,transition} from '@angular/animations';
@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ServiceCardComponent,CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
  animations:[
       trigger('flyFromTop', [
            state(
              'in',
              style({transform: 'translateY(0)',opacity:'1'}),
            ),
            transition('void => *', [style({transform: 'translateY(-100%)',opacity:'0'}), animate(800)]),
          ]),
    ]
})
export class ServicesComponent implements OnInit,AfterViewInit {
   @Input() servicesCardNo:number=0;
   @Input() servicesHeading:string="";
   @Input() servicesCardHeadings:Array<string>=[];
   @Input() servicesCardContent:Array<string>=[];
   @Input() imgAdd:Array<string>=[];
   public isVisible:boolean=false;
   public resolveImgClasses:Array<string>=[]
   constructor(private elementRef:ElementRef){}
   ngOnInit(): void {
      for(let img of this.imgAdd){
        this.resolveImgClasses.push(`url(${img})`)
      }
   }
   ngAfterViewInit(): void {
    const elements = this.elementRef.nativeElement.querySelectorAll('.obs');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            this.isVisible = true;
          }
        });
      },
      { threshold: 0.7 }
    );

    elements.forEach((el: HTMLElement) => observer.observe(el));
  }
}
