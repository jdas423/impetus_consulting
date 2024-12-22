import { Component,Input,OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ValuesCardComponent } from '../components/values-card/values-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-values',
  standalone: true,
  imports: [FontAwesomeModule,ValuesCardComponent,CommonModule],
  templateUrl: './values.component.html',
  styleUrl: './values.component.css'
})
export class ValuesComponent implements OnInit {
    @Input() valuesCardNo:number=0;
    @Input() valuesHeading:string="";
    @Input() valuesCardHeadings:Array<string>=[];
    @Input() valuesCardContent:Array<string>=[];
    public classRow:string="";
    public classCol:string="";

    constructor(){
    }

    ngOnInit(): void {
       this.classCol="grid-cols-2";
       this.classRow=`grid-cols-${Math.ceil(this.valuesCardNo/2)}`
    }
}
