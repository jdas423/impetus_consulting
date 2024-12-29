import { Component,Input, OnInit ,ElementRef,AfterViewInit} from '@angular/core';
import { TestimonialCardComponent } from '../components/testimonial-card/testimonial-card.component';
import {trigger,state,style,animate,transition} from '@angular/animations';
@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [TestimonialCardComponent],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.css',
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
export class TestimonialComponent implements OnInit,AfterViewInit{
  @Input() heading:string="";
  @Input() testimonialNumber:number=0;
  @Input() content:Array<string>=[];
  @Input() name:Array<string>=[];
  public isVisible:boolean=false;
  constructor(private elementRef:ElementRef){}
  ngOnInit(): void { }

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
   
}
