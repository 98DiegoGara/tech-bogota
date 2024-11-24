import { Routes } from '@angular/router';
import { HomeComponent } from './home-out/home/home.component';
import { LoginComponent } from './home-out/login/login.component';
import { HomeInComponent } from './home-in/home-in/home-in.component';
export const routes: Routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full' }, 
    { path: 'inicio', component: HomeComponent },
    { path: 'iniciar-sesion', component: LoginComponent },
    { path: 'home-in', component: HomeInComponent },
];
