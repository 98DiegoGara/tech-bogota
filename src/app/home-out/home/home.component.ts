import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { Route } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private router:Router){}

  public login(){
   this.router.navigateByUrl('iniciar-sesion');
  }

}
