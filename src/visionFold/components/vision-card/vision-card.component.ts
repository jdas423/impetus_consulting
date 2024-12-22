import { Component,Input,OnInit } from '@angular/core';
import { BackgroundColorDirective } from '../../../directives/backgroundColor/background-color.directive';

@Component({
  selector: 'app-vision-card',
  standalone: true,
  imports: [BackgroundColorDirective],
  templateUrl: './vision-card.component.html',
  styleUrl: './vision-card.component.css'
})
export class VisionCardComponent implements OnInit {
  constructor(){}
  @Input() public visionCardHeading:string="Lorem"
  @Input() public visionCardBody:string="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam amet voluptatem rem, possimus pariatur modi magni aspernatur perferendis voluptates quo a neque maiores eligendi animi."

  ngOnInit(){
    console.log(this.visionCardBody)
  }
}

