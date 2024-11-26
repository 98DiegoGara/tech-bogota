import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  public validationLogin : boolean = false;

  constructor(private router:Router){}

  public login(){
   this.router.navigateByUrl('iniciar-sesion');
  }

}
