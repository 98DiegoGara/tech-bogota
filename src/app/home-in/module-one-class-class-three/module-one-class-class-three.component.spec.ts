import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleOneClassClassThreeComponent } from './module-one-class-class-three.component';

describe('ModuleOneClassClassThreeComponent', () => {
  let component: ModuleOneClassClassThreeComponent;
  let fixture: ComponentFixture<ModuleOneClassClassThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModuleOneClassClassThreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleOneClassClassThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
