import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  
  private url: string = "http://ec2-3-17-80-48.us-east-2.compute.amazonaws.com:8082/api/";
  //private url: string = "http://localhost:8082/api/";

  private headers: HttpHeaders | undefined;
  
  userUid: any = sessionStorage.getItem("userUid");

  constructor(private http: HttpClient) { 
    this.setHeaders();
  }
  
  getProfile(userRole: any): Observable<any>{
    
    if (userRole == "invitado") {
      return this.http.get(`${this.url}invitado/perfil/${this.userUid}`, {headers: this.headers});
    }else if (userRole == "fotografo") {
      return this.http.get(`${this.url}fotografo/perfil_fotografo/${this.userUid}`, {headers: this.headers});
    }else{
      console.log(this.userUid);
      
      return this.http.get(`${this.url}organizador/perfil/${this.userUid}`, {headers: this.headers});
    }
  }
  
  getEventByPhotographer(): Observable<any>{
    return this.http.get(`${this.url}fotografo/ver_eventos/${this.userUid}`, {headers: this.headers});
  }
  setHeaders() {
    this.headers = new HttpHeaders()
      .set("Content-Accept", "application/json")
      .set("X-Requested-With", "XMLHttpRequest")
      .set("Content-Type", "application/json")
      .set("Accept", "application/pdf")
      .set("x-token", sessionStorage.getItem("token")!);

      console.log(this.headers);
      
  }
}
