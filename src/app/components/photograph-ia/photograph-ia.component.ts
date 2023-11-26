import { Component, OnInit } from '@angular/core';
import { PhotographService } from 'src/app/services/photograph.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-photograph-ia',
  templateUrl: './photograph-ia.component.html',
  styleUrls: ['./photograph-ia.component.css']
})
export class PhotographIAComponent implements OnInit {
  formData: FormData | undefined;
  file: any;
  constructor(private photographService: PhotographService) { }

  ngOnInit(): void {
  }
  
  registerPhotographyIA(){
    this.photographService.registerPhotoIa(this.formData).subscribe(
      {
        next: (res: any) => {
          console.log(res);

          if (res.mensaje == "error al entrenar la imagen") {
            Swal.fire({
              position: 'top-end',
              icon: 'error',
              title: res.mensaje,
              showConfirmButton: false,
              timer: 2000
            })
          }else{
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Imagen registrada para entrenamiento con éxito!',
              showConfirmButton: false,
              timer: 2000
            })
          }
          
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

  fileSelected($event: any){
    this.formData = new FormData();  
    this.file = $event.target.files[0];
    
    console.log(this.file);

    this.formData.append('archivo', this.file!);

    console.log(this.formData);
  }
}
