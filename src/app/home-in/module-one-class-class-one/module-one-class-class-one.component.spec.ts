import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleOneClassClassOneComponent } from './module-one-class-class-one.component';

describe('ModuleOneClassClassOneComponent', () => {
  let component: ModuleOneClassClassOneComponent;
  let fixture: ComponentFixture<ModuleOneClassClassOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModuleOneClassClassOneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleOneClassClassOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
