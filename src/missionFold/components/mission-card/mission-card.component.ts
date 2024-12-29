import { Component,Input,AfterViewInit, ElementRef,PLATFORM_ID, Inject} from '@angular/core';
import { UpperCasePipe,isPlatformBrowser } from '@angular/common';
import {trigger,state,style,animate,transition} from '@angular/animations';
@Component({
  selector: 'app-mission-card',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './mission-card.component.html',
  styleUrl: './mission-card.component.css',
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
export class MissionCardComponent implements AfterViewInit {
  @Input() heading:string="";
  @Input() body: string = "";
  public isVisible:boolean=false;
  public in:boolean=false;
  constructor(private elementRef:ElementRef,@Inject(PLATFORM_ID) private platformId: Object){}
  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const elements = this.elementRef.nativeElement.querySelectorAll('.obs');
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
              this.isVisible = true;
            }
          });
        },
        { threshold: 0.3 }
      );
  
      elements.forEach((el: HTMLElement) => observer.observe(el));
    }
    else{
      console.warn('IntersectionObserver is not supported during SSR.');
    }
  }
  mouseIn(){
    this.in=true;
  }

  mouseOut(){
   this.in=false;
  }
}
