import { AfterViewInit, Component,ElementRef,Input,OnInit } from '@angular/core';
import { VisionCardComponent } from '../components/vision-card/vision-card.component';
import { FontColorDirective } from '../../directives/fontColor/font-color.directive';
import {trigger,state,style,animate,transition} from '@angular/animations';
@Component({
  selector: 'app-vision',
  standalone: true,
  imports: [VisionCardComponent,FontColorDirective],
  templateUrl: './vision.component.html',
  styleUrl: './vision.component.css',
  animations:[
      trigger('flyFromTop', [
        state(
          'in',
          style({transform: 'translateY(0)',opacity:'1'}),
        ),
        transition('void => *', [style({transform: 'translateY(-100%)',opacity:'0'}), animate(800)]),
      ])
    ]
})
export class VisionComponent implements OnInit,AfterViewInit {
   public isVisible:boolean=false;
   constructor(private elementRef:ElementRef){ 
   }
   @Input() public visionCardNo:number=0
   @Input() public visionHeading:string=""
   @Input() public visionCardHeading:Array<string>=[]
   @Input() public visionCardContent:Array<string>=[]
   ngOnInit(){
   
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
