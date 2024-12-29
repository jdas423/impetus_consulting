import { AfterViewInit, Component,ElementRef,Input,OnInit } from '@angular/core';
import { BackgroundColorDirective } from '../../../directives/backgroundColor/background-color.directive';
import {trigger,state,style,animate,transition} from '@angular/animations';
@Component({
  selector: 'app-vision-card',
  standalone: true,
  imports: [BackgroundColorDirective],
  templateUrl: './vision-card.component.html',
  styleUrl: './vision-card.component.css',
  animations: [
    trigger('inout', [
      state(
        'in',
        style({
          color:'#ef6868',
          transform:"scale(1.05)",
          boxShadow:"none",
          border:"2px solid #ef6868",
          borderRadius:"2px"
        }),
      ),
      state(
        'out',
        style({
          color:'#058438bd',
          transform:"scale(1)",
          border:"2px solid #058438bd",
          borderRadius:"2px"
        }),
      ),
      transition('in <=> out', [animate('0.3s')])
    ]),
    trigger('zoomOut', [
      state(
        'in',
        style({transform: 'scale(1)',opacity:'1'}),
      ),
      transition('void => *', [style({transform: 'scale(0)',opacity:'0'}), animate(800)]),
    ]),
  ],
})
export class VisionCardComponent implements OnInit,AfterViewInit {
  public isVisible:boolean=false
  constructor(private elementRef:ElementRef){}
  @Input() public visionCardHeading:string="Lorem"
  @Input() public visionCardBody:string="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam amet voluptatem rem, possimus pariatur modi magni aspernatur perferendis voluptates quo a neque maiores eligendi animi."
  public in:boolean=false;
  ngOnInit(){
    console.log(this.visionCardBody)
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
      { threshold: 0.5 }
    );

    elements.forEach((el: HTMLElement) => observer.observe(el));
  }
 
  mouseIn(){
    this.in=true;
  }

  mouseOut(){
   this.in=false;
  }
}

