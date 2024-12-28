import { Component,Input, OnInit } from '@angular/core';
import { TestimonialCardComponent } from '../components/testimonial-card/testimonial-card.component';
@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [TestimonialCardComponent],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.css'
})
export class TestimonialComponent implements OnInit{
  @Input() heading:string="";
  @Input() testimonialNumber:number=0;
  @Input() content:Array<string>=[];
  @Input() name:Array<string>=[];
  
  constructor(){}
  ngOnInit(): void {}
}
