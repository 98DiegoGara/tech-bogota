import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [HeaderComponent,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss', 
  standalone: true,
})
export class LoginComponent {

  public isRegister : boolean = false;

  constructor(public router :Router ){

  }

  public back(){
    this.router.navigateByUrl('');
  }

  public login(){
    this.router.navigateByUrl('home-in');
  }

  public loginuser(){
    this.router.navigateByUrl('iniciar-sesion');
  }

  public register(){
    this.isRegister = true;
  }

  
}
