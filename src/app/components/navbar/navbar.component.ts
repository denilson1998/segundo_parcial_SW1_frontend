import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isClient: any = false;
  isPhotographer: any = false;
  isEventAdm: any = false;
  constructor(private router: Router) { 
    if (sessionStorage.getItem("userRole") == "organizador") {
      this.isEventAdm = true;
    } else if (sessionStorage.getItem("userRole") == "invitado") {
      this.isClient = true;
    }else{
      this.isPhotographer = true; 
    }
  }

  ngOnInit(): void {
  }
  logout(){
    //this.cookieService.delete("token");
    sessionStorage.clear();
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Sesión Cerrada con Exito!',
      showConfirmButton: false,
      timer: 2000
    })
    setTimeout(() => {
      this.router.navigate(["/login"]);
    }, 2500);
  }
}
