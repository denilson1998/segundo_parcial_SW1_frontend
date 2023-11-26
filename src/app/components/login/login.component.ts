import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: any;
  password: any;
  constructor(private router: Router, private loginService: LoginService) { 
    
  }
  
  ngOnInit(): void {
  }
  
  login(){
    let user = {
      correo_electronico: this.email,
      password: this.password
    }

    this.loginService.login(user).subscribe( 
      {
        next: (res: any) => {

          console.log(res);
          sessionStorage.setItem('token',res.token);
          sessionStorage.setItem('userRole', res.rol_user);
          sessionStorage.setItem('subscriptionState', res.estado_suscripcion);
          sessionStorage.setItem('eventUid', res.evento_uid);
          sessionStorage.setItem('userUid', res.uid);

          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Usuario Logeado con Exito!',
            showConfirmButton: false,
            timer: 2000
          })

          setTimeout(() => {
            if (sessionStorage.getItem("subscriptionState")) {
              this.router.navigate(["/profile"]);
            }else{
              this.router.navigate(["/subscription"]);
            }
          }, 2100);
        },
        error: (error: any) => {
          console.log(error);
        }
      }
    );
  }

  redirect(){
    this.router.navigate(["/home"]);
  }
}
