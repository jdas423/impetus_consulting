import { Component,OnInit, Output,EventEmitter} from '@angular/core';
import { BackgroundColorDirective } from '../directives/backgroundColor/background-color.directive';
import { UpperCasePipe, CommonModule,TitleCasePipe} from '@angular/common';
import {trigger,state,style,animate,transition} from '@angular/animations';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [BackgroundColorDirective,UpperCasePipe,CommonModule,TitleCasePipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  animations: [
    trigger('inout', [
      state(
        'in',
        style({
          color:'#ef6868'
        }),
      ),
      state(
        'out',
        style({
          color:'white'
        }),
      ),
      transition('in <=> out', [animate('0.3s')])
    ]),
  ],
})
export class NavbarComponent implements OnInit {
   constructor(){};
   public listItems:Array<string>=["About Us","Vision","Mission","Values","Services","Contact Us","Testimonials"];
   public in:Array<boolean>=[];
   @Output() listItem=new EventEmitter<string>();
   ngOnInit(): void{
       for(let i=0;i<this.listItems.length;i++){
         this.in.push(false);
       }
   }  
   
   mouseIn(ind:number){
     this.in[ind]=true;
   }

   mouseOut(ind:number){
    this.in[ind]=false;
  }
  
  scrollToView(listItm:string) {
    this.listItem.emit(listItm);
  }
}
