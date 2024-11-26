import { Component, AfterViewInit, ViewChild,ChangeDetectorRef  } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { CommonModule } from '@angular/common'; 
import { Router } from '@angular/router';
@Component({
  selector: 'app-home-in',
  standalone: true, 
  imports: [HeaderComponent, CommonModule], 
  templateUrl: './home-in.component.html',
  styleUrls: ['./home-in.component.scss'] 
})
export class HomeInComponent {

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  constructor(private cdr: ChangeDetectorRef, public router :Router) {}

  ngAfterViewInit(): void {
    this.headerComponent.validationLogin = true; 
    this.cdr.detectChanges(); 
  }

  getModuleOne(){
    this.router.navigateByUrl('module-one');
  }


}
