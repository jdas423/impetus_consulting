import { Component,Input} from '@angular/core';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
     constructor(){
     }

     @Input() public aboutUsHeading:string="About Us"
     @Input() public aboutUsBody:string="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error necessitatibus similique perferendis eius debitis consectetur ut excepturi dolorum, laboriosam ducimus magnam voluptate, impedit facilis, unde ratione laborum fugit perspiciatis repellendus aliquid! Dolores deleniti fugiat cum excepturi accusamus molestias. Sapiente, officia."

}
