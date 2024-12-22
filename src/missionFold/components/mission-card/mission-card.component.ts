import { Component,Input } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
@Component({
  selector: 'app-mission-card',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './mission-card.component.html',
  styleUrl: './mission-card.component.css'
})
export class MissionCardComponent {
    @Input() heading:string="";
    @Input() body:string="";
}
