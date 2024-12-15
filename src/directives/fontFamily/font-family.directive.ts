import { Directive,ElementRef,Input } from '@angular/core';

@Directive({
  selector: '[appFontFamily]',
  standalone: true
})
export class FontFamilyDirective {
  @Input() fontFamily="";
  constructor(private e:ElementRef) {
     this.e.nativeElement.style.color=this.fontFamily || "'Courier New', Courier, monospace;";
   }
     
}
