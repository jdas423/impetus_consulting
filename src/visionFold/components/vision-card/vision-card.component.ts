import { Component,Input,OnInit } from '@angular/core';
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
  ],
})
export class VisionCardComponent implements OnInit {
  constructor(){}
  @Input() public visionCardHeading:string="Lorem"
  @Input() public visionCardBody:string="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam amet voluptatem rem, possimus pariatur modi magni aspernatur perferendis voluptates quo a neque maiores eligendi animi."
  public in:boolean=false;
  ngOnInit(){
    console.log(this.visionCardBody)
  }
 
  mouseIn(){
    this.in=true;
  }

  mouseOut(){
   this.in=false;
  }
}

