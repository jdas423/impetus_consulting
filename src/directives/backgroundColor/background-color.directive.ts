import { Directive,ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appBackgroundColor]',
  standalone: true
})
export class BackgroundColorDirective {
  @Input() bgColor="";
  constructor(private e:ElementRef) { 
      this.e.nativeElement.style.backgroundColor= this.bgColor || '#058438bd';
  }

}
