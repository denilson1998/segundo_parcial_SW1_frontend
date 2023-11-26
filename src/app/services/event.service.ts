import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private url: string = "http://ec2-3-17-80-48.us-east-2.compute.amazonaws.com:8082/api/";
  //private url: string = "http://localhost:8082/api/";

  private headers: HttpHeaders | undefined;

  userUid: any = sessionStorage.getItem("userUid");
  constructor(private http: HttpClient) { 
    this.setHeaders();
  }
  
  getEventList(): Observable<any>{
    return this.http.get(`${this.url}organizador/todos_los_eventos/${this.userUid}`, {headers: this.headers});
  }

  getPhotographersByEvent(): Observable<any>{
    return this.http.get(`${this.url}organizador/todos_los_eventos/${this.userUid}`, {headers: this.headers});
  }

  registerEvent(event: any): Observable<any>{
    return this.http.post(`${this.url}organizador/crear_evento/${this.userUid}`, event,{headers: this.headers});
  }

  getPhotographers(): Observable<any>{
    return this.http.get(`${this.url}fotografo`, {headers: this.headers});
  }

  registePhotographerInEvent(photographerUid: any, eventUid: any): Observable<any>{
    return this.http.post(`${this.url}organizador/agregar_fotografo_evento/${photographerUid}/${eventUid}`, "", {headers: this.headers});
  }
  
  getClients(): Observable<any>{
    return this.http.get(`${this.url}invitado`, {headers: this.headers});
  }

  registerClientInEvent(clientUid: any, eventUid: any): Observable<any>{
    return this.http.post(`${this.url}organizador/agregar_invitado_evento/${clientUid}/${eventUid}`, "", {headers: this.headers});
  }

  getClientsAssistance(eventUid: any): Observable<any>{
    return this.http.get(`${this.url}organizador/lista_asistentes_evento/${eventUid}`, {headers: this.headers});
  }
  
  cancelEvent(eventUid: any): Observable<any>{
    return this.http.delete(`${this.url}organizador/cancelar_evento/${eventUid}`, {headers: this.headers});
  }
  
  setHeaders() {
    this.headers = new HttpHeaders()
      .set("Content-Accept", "application/json")
      .set("X-Requested-With", "XMLHttpRequest")
      .set("Content-Type", "application/json")
      .set("Accept", "application/pdf")
      .set("x-token", sessionStorage.getItem("token")!);
  }
}
