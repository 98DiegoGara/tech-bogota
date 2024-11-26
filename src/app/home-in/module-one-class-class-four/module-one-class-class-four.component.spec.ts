import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleOneClassClassFourComponent } from './module-one-class-class-four.component';

describe('ModuleOneClassClassFourComponent', () => {
  let component: ModuleOneClassClassFourComponent;
  let fixture: ComponentFixture<ModuleOneClassClassFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModuleOneClassClassFourComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleOneClassClassFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
