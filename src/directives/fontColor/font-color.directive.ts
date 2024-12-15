import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appFontColor]',
  standalone: true
})
export class FontColorDirective {
  @Input() fontColor:string="";
  constructor(private e:ElementRef) { 
    this.e.nativeElement.style.color=this.fontColor || "#058438bd";
  }


}
