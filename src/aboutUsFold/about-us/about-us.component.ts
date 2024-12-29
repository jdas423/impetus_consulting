import { AfterViewInit, Component,ElementRef,Input,PLATFORM_ID, Inject} from '@angular/core';
import {trigger,state,style,animate,transition} from '@angular/animations';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css',
  animations: [
    trigger('flyFromTop', [
      state(
        'in',
        style({transform: 'translateY(0)',opacity:'1'}),
      ),
      transition('void => *', [style({transform: 'translateY(-100%)',opacity:'0'}), animate(800)]),
    ]),
    trigger('zoomOut', [
      state(
        'in',
        style({transform: 'scale(1)',opacity:'1'}),
      ),
      transition('void => *', [style({transform: 'scale(0)',opacity:'0'}), animate(800)]),
    ]),
  ]
})
export class AboutUsComponent implements AfterViewInit {
     public isVisible:boolean=false

     @Input() public aboutUsHeading:string="About Us"
     @Input() public aboutUsBody:string="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error necessitatibus similique perferendis eius debitis consectetur ut excepturi dolorum, laboriosam ducimus magnam voluptate, impedit facilis, unde ratione laborum fugit perspiciatis repellendus aliquid! Dolores deleniti fugiat cum excepturi accusamus molestias. Sapiente, officia."
     constructor(private elementRef:ElementRef,@Inject(PLATFORM_ID) private platformId: Object){

     }
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
          { threshold: 0.7 }
        );
        elements.forEach((el: HTMLElement) => observer.observe(el));
      }
      else {
      console.warn('IntersectionObserver is not supported during SSR.');
      }
  }
}
