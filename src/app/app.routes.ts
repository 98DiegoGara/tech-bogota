import { Routes } from '@angular/router';
import { HomeComponent } from './home-out/home/home.component';
import { LoginComponent } from './home-out/login/login.component';
import { HomeInComponent } from './home-in/home-in/home-in.component';
import { ModuleOneComponent } from './home-in/module-one/module-one.component';
import { ModuleOneClassClassOneComponent } from './home-in/module-one-class-class-one/module-one-class-class-one.component';
import { ModuleOneClassClassTwoComponent } from './home-in/module-one-class-class-two/module-one-class-class-two.component';
import { ModuleOneClassClassThreeComponent } from './home-in/module-one-class-class-three/module-one-class-class-three.component';
import { ModuleOneClassClassFourComponent } from './home-in/module-one-class-class-four/module-one-class-class-four.component';

export const routes: Routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full' }, 
    { path: 'inicio', component: HomeComponent },
    { path: 'iniciar-sesion', component: LoginComponent },
    { path: 'home-in', component: HomeInComponent },
    { path: 'module-one', component: ModuleOneComponent },
    { path: 'module-one-class', component: ModuleOneClassClassOneComponent },
    { path: 'module-two-class', component: ModuleOneClassClassTwoComponent },
    { path: 'module-three-class', component: ModuleOneClassClassThreeComponent },
    { path: 'module-four-class', component: ModuleOneClassClassFourComponent },
];
