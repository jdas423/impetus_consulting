import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Data{
  heading:string;
  number:number;
  content:Array<string>;
  name:Array<string>;
}

@Injectable({
  providedIn: 'root'
})
export class TestimonialContentService {
  public testimonialHeading:string="";
  public testimonialNumber:number=0
  public testimonialContent:Array<string>=[]
  public testimonialName:Array<string>=[]
  public data:Data={"heading":"","number":0,"content":[],"name":[]};
  constructor(private http:HttpClient) { 
    this.loadFile()
  }

  loadFile(){
     const filePath='/testimonialContent.json'
     this.http.get(filePath, { responseType: 'json' }).subscribe({
      next: (response:any) => {
        this.data = response;
        this.testimonialHeading=this.data.heading;
        this.testimonialNumber=this.data.number;
        this.testimonialContent=this.data.content;
        this.testimonialName=this.data.name;
      },
      error: (err) => {
        console.error('Error reading the file:', err);
      },
    });
     
  }

  loadtestimonialHeading(){
      return this.testimonialHeading;
  }

  loadtestimonialNumber(){
    return this.testimonialNumber;
}

  loadtestimonialName(){
    return this.testimonialName;
  }

  loadtestimonialContent(){
    return this.testimonialContent;
  }


}
