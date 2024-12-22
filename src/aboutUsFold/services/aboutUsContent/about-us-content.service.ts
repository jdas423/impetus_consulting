import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Data{
  heading:string;
  body:string;
}

@Injectable({
  providedIn: 'root'
})
export class AboutUsContentService {
  public aboutUsHeading:string="";
  public aboutUsBody:string=""
  public data:Data={"heading":"","body":""};
  constructor(private http:HttpClient) { 
    this.loadFile();
  }

  loadFile(){
     const filePath='/aboutUsContent.json'
     this.http.get(filePath, { responseType: 'json' }).subscribe({
      next: (response:any) => {
        console.log('File content:', response);
        this.data = response;
        this.aboutUsHeading=this.data.heading;
        this.aboutUsBody=this.data.body;
      },
      error: (err) => {
        console.error('Error reading the file:', err);
      },
    });
     
  }

  loadAboutHeading(){
      return this.aboutUsHeading;
  }

  loadAboutBody(){
    return this.aboutUsBody;
}
}
