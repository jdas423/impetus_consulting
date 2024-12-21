import { Component,ElementRef,Input,OnInit } from '@angular/core';
import { VisionCardComponent } from '../components/vision-card/vision-card.component';
import { FontColorDirective } from '../../directives/fontColor/font-color.directive';
@Component({
  selector: 'app-vision',
  standalone: true,
  imports: [VisionCardComponent,FontColorDirective],
  templateUrl: './vision.component.html',
  styleUrl: './vision.component.css'
})
export class VisionComponent implements OnInit {
   constructor(){}
   @Input() public visionCardNo:number=6
   public visionCardElementsInd:Array<number> =[]

   ngOnInit(){
      for(let num=0;num<this.visionCardNo;num++){
          this.visionCardElementsInd.push(num)
      }
   }
}
