import { Component,Input,OnInit,AfterViewInit, ElementRef} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ValuesCardComponent } from '../components/values-card/values-card.component';
import { CommonModule } from '@angular/common';
import {trigger,state,style,animate,transition} from '@angular/animations';
@Component({
  selector: 'app-values',
  standalone: true,
  imports: [FontAwesomeModule,ValuesCardComponent,CommonModule],
  templateUrl: './values.component.html',
  styleUrl: './values.component.css',
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
export class ValuesComponent implements OnInit,AfterViewInit{
    @Input() valuesCardNo:number=0;
    @Input() valuesHeading:string="";
    @Input() valuesCardHeadings:Array<string>=[];
    @Input() valuesCardContent:Array<string>=[];
    public classRow:string="";
    public classCol:string="";
    public isVisible:boolean=false;
    constructor(private elementRef:ElementRef){
    }

    ngOnInit(): void {
       this.classCol="grid-cols-2";
       this.classRow=`grid-cols-${Math.ceil(this.valuesCardNo/2)}`
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
