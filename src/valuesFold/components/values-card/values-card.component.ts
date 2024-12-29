import { AfterViewInit, Component,ElementRef,Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UpperCasePipe } from '@angular/common';
import { library,dom} from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import {trigger,state,style,animate,transition} from '@angular/animations';
@Component({
  selector: 'app-values-card',
  standalone: true,
  imports: [FontAwesomeModule,UpperCasePipe],
  templateUrl: './values-card.component.html',
  styleUrl: './values-card.component.css',
  animations: [
          trigger('inout', [
            state(
              'in',
              style({
                color:'#ef6868',
                transform:"scale(1.03)",
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
     trigger('binbout', [
            state(
              'bin',
              style({
                backgroundColor:'#ef6868',
              }),
            ),
            state(
              'bout',
              style({
                backgroundColor:'#058438bd',
                // transform:"scale(1)",
              }),
            ),
            transition('bin <=> bout', [animate('0.1s')])
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
export class ValuesCardComponent implements AfterViewInit {
   @Input() heading:string="";
   @Input() body:string="";
   public isVisible:boolean=false;
   public in: boolean = false;
   public bin:boolean=false;
   constructor(private elementRef:ElementRef){
    library.add(fas,faCheck);
    dom.watch(); 
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
      this.in = true;
      this.bin=true;
  }

  mouseOut(){
    this.in = false;
    this.bin=false;
  }
}
