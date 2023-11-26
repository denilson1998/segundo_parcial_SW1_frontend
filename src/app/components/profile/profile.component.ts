import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs/internal/Subscriber';
import { PhotographService } from 'src/app/services/photograph.service';
import { ProfileService } from 'src/app/services/profile.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: Array<any>;
  email: any;
  eventDescription: any;
  address: any;
  profilePhotographUrl: any;
  userFullName: any;
  eventName: any;
  phoneNumber: any;
  file: any | undefined;
  formData: FormData | undefined;
  isClient: any = false;
  isPhotographer: any = false;
  isAdmEvent: any = false;
  constructor(private profileService: ProfileService, private photographService: PhotographService) { 
    this.profile = [];
    this.getProfile();
  }

  ngOnInit(): void {
  }
  
  getProfile(){
    
    this.profileService.getProfile(sessionStorage.getItem("userRole")).subscribe(
      {
        next: (res: any) => {
          this.profile = res;
          this.email = res.correo_electronico;
          this.eventDescription = res.descripcion_evento;
          this.address = res.direccion;
          this.profilePhotographUrl = res.foto_perfil_url;
          this.userFullName = res.fullname;
          this.eventName = res.nombre_evento;
          this.phoneNumber = res.nro_telefono;
          console.log(this.profile);

          if (sessionStorage.getItem("userRole") == "fotografo") {
            this.isPhotographer = true;
            this.getEventByPhotographer();
          }

          if (sessionStorage.getItem("userRole") == "invitado") {
            this.isClient = true;
          }else{
            this.isAdmEvent = true;
          }
        },
        error: (error: any) => {
          console.log(error);
          
        }
      }
    );
  }
  
  getEventByPhotographer(){
    this.profileService.getEventByPhotographer().subscribe(
      {
        next: (res: any) => {
          console.log(res);
          
        },
        error: (error: any) => {
          console.log(error);
          
        }
      }
    );
  }
  fileSelected($event: any){
    this.formData = new FormData();  
    this.file = $event.target.files[0];
    
    console.log(this.file);

    this.formData.append('archivo', this.file!);

    console.log(this.formData);
  }

  registerLuxand(){
    
    console.log(this.file);

    this.photographService.registerLuxand(this.formData).subscribe(
      {
        next: (res: any) => {
          console.log(res);
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Imagen registrada en Luxand con éxito!',
            showConfirmButton: false,
            timer: 2000
          })
        },
        error: (error: any) => {
          console.log(error.error);
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: error.error.mensaje,
            showConfirmButton: false,
            timer: 2000
          })
        }
      }
    ); 
  }
/* 
  convertToBase64(file: File){
    const observable = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber);
    });

    observable.subscribe((d) => {
      //console.log(d);
      this.image = d;
      //console.log(this.image);
      this.base64code = d;
      //console.log(this.base64code);
    });
  } */
}
