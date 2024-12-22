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
export class missionContentService {
  public missionHeading:string="";
  public missionNumber:number=0
  public missionContentHeading:Array<string>=[]
  public missionContent:Array<string>=[]
  public data:Data={"heading":"","number":0,"contentHeading":[],"content":[]};
  constructor(private http:HttpClient) { 
    this.loadFile()
  }

  loadFile(){
     const filePath='/missionContent.json'
     this.http.get(filePath, { responseType: 'json' }).subscribe({
      next: (response:any) => {
        this.data = response;
        this.missionHeading=this.data.heading;
        this.missionNumber=this.data.number;
        this.missionContentHeading=this.data.contentHeading;
        this.missionContent=this.data.content;
      },
      error: (err) => {
        console.error('Error reading the file:', err);
      },
    });
     
  }

  loadMissionHeading(){
      return this.missionHeading;
  }

  loadmissionNumber(){
    return this.missionNumber;
}

  loadMissionContentHeadings(){
    return this.missionContentHeading;
  }

  loadMissionContent(){
    return this.missionContent;
  }
}
