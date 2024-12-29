import { AfterViewInit, Component, Input,ElementRef } from '@angular/core';
import {trigger,state,style,animate,transition} from '@angular/animations';
@Component({
  selector: 'app-testimonial-card',
  standalone: true,
  imports: [],
  templateUrl: './testimonial-card.component.html',
  styleUrl: './testimonial-card.component.css',
   animations: [
        trigger('inout', [
          state(
            'in',
            style({
              color:'#ef6868',
              transform:"scale(1.05)",
            }),
          ),
          state(
            'out',
            style({
              color:'#058438bd',
              transform:"scale(1)",
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
export class TestimonialCardComponent implements AfterViewInit {
  @Input() name:string="";
  @Input() content: string = "";
   public in:boolean=false;
   public isVisible:boolean=false;
   constructor(private elementRef:ElementRef){

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
