import { Component,ElementRef,Input,AfterViewInit } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import {trigger,state,style,animate,transition} from '@angular/animations';
@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.css',
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
              color:'white',
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
export class ServiceCardComponent implements AfterViewInit {
  @Input() heading:string="";
  @Input() body: string = "";
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
