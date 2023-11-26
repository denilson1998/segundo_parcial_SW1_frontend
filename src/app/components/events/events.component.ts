import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  eventList: Array<any>;
  eventPhotographers: Array<any>;
  name: any;
  description: any;
  date: any;
  hour: any;
  place: any;
  location: any;
  eventUid: any;
  listPhotographers: Array<any>;
  photographerUid: any;
  listClients: Array<any>;
  clientUid: any;
  listClientsAssistance: Array<any>;
  constructor(private router: Router, private eventService: EventService) { 
    this.eventList = [];
    this.eventPhotographers = [];
    this.listPhotographers = [];
    this.listClients = [];
    this.listClientsAssistance = [];
    this.getEventList();
  }

  getEventList(){
    this.eventService.getEventList().subscribe(
      {
        next: (res: any) => {
          this.eventList = res;
          console.log(this.eventList);
          
        },
        error: (error: any) => {
          console.log(error);
          
        }
      }
    );
  }
  
  getPhotographersByEvent(eventPhotographers: any){

    this.eventPhotographers = eventPhotographers;
    
    console.log(this.eventPhotographers);
  }

  registerEvent(){
      let event = {
        nombre_evento : this.name,
        descripcion: this.description,
        fecha: this.date,
        hora: this.hour,
        lugar: this.place,
        ubicacion: this.location
      };

      console.log(event);
      

      this.eventService.registerEvent(event).subscribe(
        {
          next: (res: any) => {
            console.log(res);
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Evento registrado con exito!',
              showConfirmButton: false,
              timer: 2000
            })

            setTimeout(() => {
              window.location.reload();
            }, 2100);
          },
          error: (error: any) => {
            console.log(error);
            
          }
        }
      );
  }
  
  getPhotographers(eventUid: any){
      this.eventUid = eventUid;

      this.eventService.getPhotographers().subscribe(
        {
          next: (res: any) => {
            console.log(res);
            this.listPhotographers = res;
            console.log(this.listPhotographers);
            
          },
          error: (error: any) => {
            console.log(error);
            
          }
        }
      );
  }

  registerPhotographerInEvent(){
    
    this.eventService.registePhotographerInEvent(this.photographerUid, this.eventUid).subscribe(
      {
        next: (res: any) => {
          console.log(res);
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Fotografo asignado con exito!',
            showConfirmButton: false,
            timer: 2000
          })

          setTimeout(() => {
            window.location.reload();
          }, 2100);
        },
        error: (error: any) => {
          console.log(error);
          
        }
      }
    );
  }
  getClients(eventUid: any){
    this.eventUid = eventUid;

    this.eventService.getClients().subscribe(
      {
        next: (res: any) => {
          console.log(res);
          this.listClients = res;
          console.log(this.listClients);
          
        },
        error: (error: any) => {
          console.log(error);
          
        }
      }
    );
  }
  registerClientInEvent(){
      
    this.eventService.registerClientInEvent(this.clientUid, this.eventUid).subscribe(
      {
        next: (res: any) => {
          console.log(res);
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Invitado asignado con exito!',
            showConfirmButton: false,
            timer: 2000
          })
  
          setTimeout(() => {
            window.location.reload();
          }, 2100);
        },
        error: (error: any) => {
          console.log(error);
          
        }
      }
    );
  }

  getClientsAssistance(eventUid: any){

    this.eventService.getClientsAssistance(eventUid).subscribe(
      {
        next: (res: any) => {
          console.log(res);
          this.listClientsAssistance = res.listaInvitados;
        },
        error: (error: any) => {
          console.log(error);
          
        }
      }
    );
  }

  cancelEvent(eventUid: any){
    this.eventService.cancelEvent(eventUid).subscribe(
      {
        next: (res: any) => {
          console.log(res);
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Evento cancelado con Exito!',
            showConfirmButton: false,
            timer: 2000
          })
  
          setTimeout(() => {
            window.location.reload();
          }, 2100);
        },
        error: (error: any) => {
          console.log(error);
        }
      }
    );
  }
  changePhotographerUid(){
    console.log(this.eventUid);
    console.log(this.photographerUid);
  }
  changeClientUid(){
    console.log(this.eventUid);
    console.log(this.clientUid);
  }
  ngOnInit(): void {
  }

}
