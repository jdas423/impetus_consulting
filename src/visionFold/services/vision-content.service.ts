import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Data{
  heading:string;
  number:number;
  contentHeading:Array<string>;
  content:Array<string>;
}

@Injectable({
  providedIn: 'root'
})
export class visionContentService {
  public visionHeading:string="";
  public visionNumber:number=0
  public visionContentHeading:Array<string>=[]
  public visionContent:Array<string>=[]
  public data:Data={"heading":"","number":0,"contentHeading":[],"content":[]};
  constructor(private http:HttpClient) { 
    this.loadFile()
  }

  loadFile(){
     const filePath='/visionContent.json'
     this.http.get(filePath, { responseType: 'json' }).subscribe({
      next: (response:any) => {
        this.data = response;
        this.visionHeading=this.data.heading;
        this.visionNumber=this.data.number;
        this.visionContentHeading=this.data.contentHeading;
        this.visionContent=this.data.content;
      },
      error: (err) => {
        console.error('Error reading the file:', err);
      },
    });
     
  }

  loadVisionHeading(){
      return this.visionHeading;
  }

  loadVisionNumber(){
    return this.visionNumber;
}

  loadVisionContentHeadings(){
    return this.visionContentHeading;
  }

  loadVisionContent(){
    return this.visionContent;
  }
}
