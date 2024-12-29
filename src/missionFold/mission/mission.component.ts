import { Component,ElementRef,Input, OnInit,PLATFORM_ID, Inject} from '@angular/core';
import { MissionSvgComponent } from '../components/mission-svg/mission-svg.component';
import { MissionCardComponent } from '../components/mission-card/mission-card.component';
import { BackgroundColorDirective } from '../../directives/backgroundColor/background-color.directive';
import {trigger,state,style,animate,transition} from '@angular/animations';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-mission',
  standalone: true,
  imports: [MissionSvgComponent,MissionCardComponent,BackgroundColorDirective],
  templateUrl: './mission.component.html',
  styleUrl: './mission.component.css',
  animations:[
    trigger('flyFromTop', [
      state(
        'in',
        style({transform: 'translateY(0)',opacity:'1'}),
      ),
      transition('void => *', [style({transform: 'translateY(-100%)',opacity:'0'}), animate(800)]),
    ]),
    trigger('flyFromLeft', [
      state(
        'in',
        style({transform: 'translateX(0)',opacity:'1'}),
      ),
      transition('void => *', [style({transform: 'translateX(-100%)',opacity:'0'}), animate(800)]),
    ])
  ]
})
export class MissionComponent implements OnInit {
  constructor(private elementRef:ElementRef,@Inject(PLATFORM_ID) private platformId: Object){}
  public isVisible:boolean=false;
  @Input() public missionCardNo:number=0;
  @Input() public missionHeading:string="";
  @Input() public missionCardHeading:Array<string>=[];
  @Input() public missionCardContent:Array<string>=[];
  ngOnInit(){
     
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
  }else{
    console.warn('IntersectionObserver is not supported during SSR.');
  }
  }

}
