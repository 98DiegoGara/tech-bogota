import { Component,ViewChild,ChangeDetectorRef  } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { CommonModule } from '@angular/common'; 
import { Router } from '@angular/router';
import {inject} from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-module-one',
  imports: [HeaderComponent, CommonModule ,  
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,],
  templateUrl: './module-one.component.html',
  styleUrl: './module-one.component.scss'
})
export class ModuleOneComponent {

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  private _formBuilder = inject(FormBuilder);

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;
  
  constructor(private cdr: ChangeDetectorRef, public router :Router) {}

  ngAfterViewInit(): void {
    this.headerComponent.validationLogin = true; 
    this.cdr.detectChanges(); 
  }

  moduleOne(){
    this.router.navigateByUrl('module-one-class');
  }

  moduletwo(){
    this.router.navigateByUrl('module-two-class');
  }
  modulethree(){
    this.router.navigateByUrl('module-three-class');
  }
  modulefour(){
    this.router.navigateByUrl('module-four-class');
  }

 

}
