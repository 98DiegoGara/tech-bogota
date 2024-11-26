import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleOneClassClassTwoComponent } from './module-one-class-class-two.component';

describe('ModuleOneClassClassTwoComponent', () => {
  let component: ModuleOneClassClassTwoComponent;
  let fixture: ComponentFixture<ModuleOneClassClassTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModuleOneClassClassTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleOneClassClassTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
