import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReparationVehiculeComponent } from './reparation-vehicule.component';

describe('ReparationVehiculeComponent', () => {
  let component: ReparationVehiculeComponent;
  let fixture: ComponentFixture<ReparationVehiculeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReparationVehiculeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReparationVehiculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
