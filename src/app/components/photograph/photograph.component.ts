import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { PhotographService } from 'src/app/services/photograph.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-photograph',
  templateUrl: './photograph.component.html',
  styleUrls: ['./photograph.component.css']
})
export class PhotographComponent implements OnInit {
  
  userPhotographsOne: Array<any>;
  userPhotographsTwo: Array<any>;
  userPhotographsThree: Array<any>;
  image!: Observable<any>;
  isAvailableOne: any;
  isAvailableTwo: any;
  isAvailableThree: any;
  count: any = 0;
  constructor(private photographService: PhotographService) { 
    this.userPhotographsOne = [];
    this.userPhotographsTwo = [];
    this.userPhotographsThree = [];
    this.getPhotographs();
    this.isAvailableOne = true;
    this.isAvailableTwo = true;
    this.isAvailableThree = true;
  }
  
  getPhotographs(){
    this.photographService.getPhotographs().subscribe(
      {
        next: (res: any) => {
          this.userPhotographsOne = res.filtrarlistaFotografiasApareceInvitado;
          this.userPhotographsTwo = res.listaFotografiasPublicas;
          this.userPhotographsThree = res.listaFotosPorEvento;

          console.log(this.userPhotographsOne);
          console.log(this.userPhotographsTwo);
          console.log(this.userPhotographsThree);
          
          /* if (this.userPhotographsOne.length == 0 ) {
            this.isAvailableOne = false;
            Swal.fire({
              position: 'top-end',
              icon: 'error',
              title: 'No tiene fotos en las que aparece!',
              showConfirmButton: false,
              timer: 2000
            })
          }else if(this.userPhotographsTwo.length == 0 || this.userPhotographsTwo[0] == undefined){
            
            this.isAvailableTwo = false;
            Swal.fire({
              position: 'top-end',
              icon: 'error',
              title: 'No tiene fotos publicas!',
              showConfirmButton: false,
              timer: 2000
            })
          }else if(this.userPhotographsThree.length == 0){
            this.isAvailableThree = false;
            Swal.fire({
              position: 'top-end',
              icon: 'error',
              title: 'No tiene fotos por evento!',
              showConfirmButton: false,
              timer: 2000
            })
          } */
          
        },
        error: (error: any) => {
          console.log(error);
          
        }
      }
    );
  }
  ngOnInit(): void {
  }
  objectKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  checkAvailable(){
    this.getPhotographs();
  }
}
