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
export class valuesContentService {
  public valuesHeading:string="";
  public valuesNumber:number=0
  public valuesContentHeading:Array<string>=[]
  public valuesContent:Array<string>=[]
  public data:Data={"heading":"","number":0,"contentHeading":[],"content":[]};
  constructor(private http:HttpClient) { 
    this.loadFile()
  }

  loadFile(){
     const filePath='/valuesContent.json'
     this.http.get(filePath, { responseType: 'json' }).subscribe({
      next: (response:any) => {
        this.data = response;
        this.valuesHeading=this.data.heading;
        this.valuesNumber=this.data.number;
        this.valuesContentHeading=this.data.contentHeading;
        this.valuesContent=this.data.content;
      },
      error: (err) => {
        console.error('Error reading the file:', err);
      },
    });
     
  }

  loadvaluesHeading(){
      return this.valuesHeading;
  }

  loadvaluesNumber(){
    return this.valuesNumber;
}

  loadvaluesContentHeadings(){
    return this.valuesContentHeading;
  }

  loadvaluesContent(){
    return this.valuesContent;
  }
}
