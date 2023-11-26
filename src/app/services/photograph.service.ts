import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PhotographService {
  
  private url: string = "http://ec2-3-17-80-48.us-east-2.compute.amazonaws.com:8082/api/";
  //private url: string = "http://localhost:8082/api/";

  private headers: HttpHeaders | undefined;
  userUid =  sessionStorage.getItem("userUid");
  constructor(private http: HttpClient) { 
    this.setHeaders();
  }
  
  getPhotographs(): Observable<any>{
    return this.http.get(`${this.url}invitado/mis_fotografias/${this.userUid}`, {headers: this.headers});
  }

  registerLuxand(file: any): Observable<any>{
    
    return this.http.post(`${this.url}invitado/registrar_ia/${this.userUid}`, file, {headers: this.headers});
  }
  
  registerPhotoIa(file: any): Observable<any>{
    
    return this.http.post(`${this.url}invitado/entrenamiento_img/${this.userUid}`, file, {headers: this.headers});
  }

  setHeaders() {
    this.headers = new HttpHeaders()
      //.set("Content-Accept", "application/json")
      //.set("X-Requested-With", "XMLHttpRequest")
      //.set("Content-Type", "multipart/form-data")
      //.set("Content-Type", "application/json")
      //.set("Accept", "application/pdf")
      .set("x-token", sessionStorage.getItem("token")!);

      console.log(this.headers);
      
  }
}
