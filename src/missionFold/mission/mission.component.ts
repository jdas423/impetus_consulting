import { Component,Input, OnInit } from '@angular/core';
import { MissionSvgComponent } from '../components/mission-svg/mission-svg.component';
import { MissionCardComponent } from '../components/mission-card/mission-card.component';
import { BackgroundColorDirective } from '../../directives/backgroundColor/background-color.directive';
@Component({
  selector: 'app-mission',
  standalone: true,
  imports: [MissionSvgComponent,MissionCardComponent,BackgroundColorDirective],
  templateUrl: './mission.component.html',
  styleUrl: './mission.component.css'
})
export class MissionComponent implements OnInit {
  constructor(){}
  @Input() public missionCardNo:number=3;
  public missionCardElementsInd:Array<number>=[];
  ngOnInit(){
      for(let num=0;num<this.missionCardNo;num++){
        this.missionCardElementsInd.push(num)
      }
  }
}
