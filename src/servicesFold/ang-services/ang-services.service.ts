import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Data{
  heading:string;
  number:number;
  contentHeading:Array<string>;
  content:Array<string>;
  imgAdd:Array<string>;
}

@Injectable({
  providedIn: 'root'
})
export class ServicesContentService {
  public ServicesHeading:string="";
  public ServicesNumber:number=0
  public ServicesContentHeading:Array<string>=[]
  public ServicesContent:Array<string>=[]
  public imgAdd:Array<string>=[]
  public data:Data={"heading":"","number":0,"contentHeading":[],"content":[],"imgAdd":[]};
  constructor(private http:HttpClient) { 
    this.loadFile()
  }

  loadFile(){
     const filePath='/servicesContent.json'
     this.http.get(filePath, { responseType: 'json' }).subscribe({
      next: (response:any) => {
        this.data = response;
        this.ServicesHeading=this.data.heading;
        this.ServicesNumber=this.data.number;
        this.ServicesContentHeading=this.data.contentHeading;
        this.ServicesContent=this.data.content;
        this.imgAdd=this.data.imgAdd;
      },
      error: (err) => {
        console.error('Error reading the file:', err);
      },
    });
     
  }

  loadServicesHeading(){
      return this.ServicesHeading;
  }

  loadServicesNumber(){
    return this.ServicesNumber;
}

  loadServicesContentHeadings(){
    return this.ServicesContentHeading;
  }

  loadServicesContent(){
    return this.ServicesContent;
  }

  loadImgAddContent(){
    return this.imgAdd;
  }

}
