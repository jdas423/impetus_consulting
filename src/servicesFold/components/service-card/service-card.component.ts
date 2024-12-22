import { Component,Input } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.css'
})
export class ServiceCardComponent {
   @Input() heading:string="";
   @Input() body:string="";
}
