import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface Data{
  location: string,
  phoneNumber: string,
  email:string
}

@Injectable({
  providedIn: 'root'
})
export class ContactContentService {
  public data: Data={"location":"","email":"",'phoneNumber':""}
  public email: string = "";
  public location: string = "";
  public phoneNumber: string = "";

  constructor(private http: HttpClient) { 
    this.loadFile()
  }
 
  loadFile() {
    const filePath='/contactContent.json'
     this.http.get(filePath, { responseType: 'json' }).subscribe({
      next: (response:any) => {
        this.data = response;
        this.location=this.data.location;
        this.phoneNumber=this.data.phoneNumber;
        this.email=this.data.email;
      },
      error: (err) => {
        console.error('Error reading the file:', err);
      },
    });
  }

  loadContactInfo() {
    return {
      "email": this.email,
      "phoneNumber": this.phoneNumber,
      "location":this.location
    }
  }
}
