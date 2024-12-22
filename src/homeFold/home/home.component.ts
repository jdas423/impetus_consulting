import { Component,OnInit } from '@angular/core';
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
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,HomePageComponent,ConsultantImgComponent,BackgroundColorDirective,
    AboutUsComponent, FontColorDirective, MissionComponent, VisionComponent, ValuesComponent,ServicesComponent
  ],
  providers:[AboutUsContentService,visionContentService,missionContentService,valuesContentService,ServicesContentService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
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
   public servicesCardNo:number=0;
    constructor(private aboutUs:AboutUsContentService,private vision:visionContentService,private mission:missionContentService,private values:valuesContentService,private services:ServicesContentService){}
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
       this.servicesCardContent=this.services.loadServicesContent()
    }
}
