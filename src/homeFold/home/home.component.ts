import { Component,ElementRef,OnInit,ViewChild } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { HomePageComponent } from '../components/home-page/home-page/home-page.component';
import { ConsultantImgComponent } from '../components/consultantImg/consultant-img/consultant-img.component';
import { BackgroundColorDirective } from '../../directives/backgroundColor/background-color.directive';
import { AboutUsComponent } from '../../aboutUsFold/about-us/about-us.component';
import { FontColorDirective } from '../../directives/fontColor/font-color.directive';
import { MissionComponent } from '../../missionFold/mission/mission.component';
import { VisionComponent } from '../../visionFold/vision/vision.component';
import { ValuesComponent } from '../../valuesFold/values/values.component';
import { AboutUsContentService } from '../../aboutUsFold/services/aboutUsContent/about-us-content.service';
import { visionContentService } from '../../visionFold/services/vision-content.service';
import { missionContentService } from '../../missionFold/services/mission.service';
import { valuesContentService } from '../../valuesFold/services/values.service';
import { ServicesContentService } from '../../servicesFold/ang-services/ang-services.service';
import { ServicesComponent } from '../../servicesFold/services/services.component';
import { ContactContentService } from '../../contactFold/services/contact-content.service';
import { ContactComponent } from '../../contactFold/contact/contact.component';
import { TestimonialContentService } from '../../testimonialFold/services/testimonial-content.service';
import { TestimonialComponent } from '../../testimonialFold/testimonial/testimonial.component';
import { FooterComponent } from '../../footerFold/footer/footer.component';
import {trigger,state,style,animate,transition} from '@angular/animations';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,HomePageComponent,ConsultantImgComponent,BackgroundColorDirective,
    AboutUsComponent, FontColorDirective, MissionComponent, VisionComponent, ValuesComponent,ServicesComponent,ContactComponent,TestimonialComponent,FooterComponent
  ],
  providers:[AboutUsContentService,visionContentService,missionContentService,valuesContentService,ServicesContentService,TestimonialContentService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [
    trigger('flyInOutLeft', [
      state(
        'in',
        style({transform: 'translateX(0)'}),
      ),
      transition('void => *', [style({transform: 'translateX(-100%)'}), animate(800)]),
    ]),
    trigger('flyInOutRight', [
      state(
        'in',
        style({transform: 'translateX(0)'}),
      ),
      transition('void => *', [style({transform: 'translateX(100%)'}), animate(800)]),
    ]),
  ]
})
export class HomeComponent implements OnInit {
   public aboutUsBody:string="";
   public aboutUsheading:string="";
   public visionCardHeading:Array<string>=[];
   public visionHeading:string="";
   public visionCardContent:Array<string>=[];
   public visionCardNo:number=0;
   public missionCardHeading:Array<string>=[];
   public missionHeading:string="";
   public missionCardContent:Array<string>=[];
   public missionCardNo:number=0;
   public valuesCardHeading:Array<string>=[];
   public valuesHeading:string="";
   public valuesCardContent:Array<string>=[];
   public valuesCardNo:number=0;
   public servicesCardHeading:Array<string>=[];
   public servicesHeading:string="";
   public servicesCardContent:Array<string>=[];
   public servicesCardNo: number = 0;
   public imgAdd:Array<string>=[];
   public contactInfo:{"email":string,"phoneNumber":string,"location":string}={"email":"","phoneNumber":"","location":""}
   public testimonialHeading:string="";
   public testimonialContent:Array<string>=[];
   public testimonialNumber:number=0;
   public testimonialName:Array<string>=[];
   @ViewChild("aboutUs") aboutUsEle!:ElementRef;
   @ViewChild("vision") visionEle!:ElementRef;
   @ViewChild("mission") missionEle!:ElementRef;
   @ViewChild("values") valuesEle!:ElementRef;
   @ViewChild("services") servicesEle!:ElementRef;
   @ViewChild("contact") contactEle!:ElementRef;
   @ViewChild("testimonial") testimonialEle!:ElementRef;
    constructor(private aboutUs:AboutUsContentService,private vision:visionContentService,private mission:missionContentService,private values:valuesContentService,private services:ServicesContentService,private contact:ContactContentService,private testimonial:TestimonialContentService){}
   
    ngOnInit(): void {
       this.aboutUsheading=this.aboutUs.loadAboutHeading();
       this.aboutUsBody=this.aboutUs.loadAboutBody();
       this.visionCardContent=this.vision.loadVisionContent();
       this.visionCardHeading=this.vision.loadVisionContentHeadings();
       this.visionCardNo=this.vision.loadVisionNumber();
       this.visionHeading=this.vision.loadVisionHeading()
       this.missionCardNo=this.mission.loadmissionNumber()
       this.missionHeading=this.mission.loadMissionHeading()
       this.missionCardHeading=this.mission.loadMissionContentHeadings()
       this.missionCardContent=this.mission.loadMissionContent()
       this.valuesCardNo=this.values.loadvaluesNumber()
       this.valuesHeading=this.values.loadvaluesHeading()
       this.valuesCardHeading=this.values.loadvaluesContentHeadings()
       this.valuesCardContent=this.values.loadvaluesContent()
       this.servicesCardNo=this.services.loadServicesNumber()
       this.servicesHeading=this.services.loadServicesHeading()
       this.servicesCardHeading=this.services.loadServicesContentHeadings()
      this.servicesCardContent = this.services.loadServicesContent()
      this.imgAdd=[...this.services.loadImgAddContent()];
      this.contactInfo={...this.contact.loadContactInfo()}
       this.testimonialHeading=this.testimonial.loadtestimonialHeading();
       this.testimonialName=this.testimonial.loadtestimonialName();
       this.testimonialContent=this.testimonial.loadtestimonialContent();
       this.testimonialNumber=this.testimonial.loadtestimonialNumber()
  }
  
  scrollToView(evt:string) {
    console.log(this.aboutUs)
    if(evt==="About Us") {
      setTimeout(() => {
        this.aboutUsEle?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100); 
    }
    else if(evt==="Vision") {
      setTimeout(() => {
        this.visionEle?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100); 
    }
    else if(evt==="Mission"){
      setTimeout(() => {
        this.missionEle?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100); 
    }
    else if(evt==="Values") {
      setTimeout(() => {
        this.valuesEle?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100); 
    }
    else if(evt==="Services") {
      setTimeout(() => {
        this.servicesEle?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100); 
    }
    else if(evt==="Contact Us") {
      setTimeout(() => {
        this.contactEle.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100); 
    }
    else if(evt==="Testimonials") {
      setTimeout(() => {
        this.testimonialEle.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100); 
    }
  }
}
