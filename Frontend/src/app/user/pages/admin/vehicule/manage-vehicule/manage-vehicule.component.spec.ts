import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageVehiculeComponent } from './manage-vehicule.component';

describe('ManageVehiculeComponent', () => {
  let component: ManageVehiculeComponent;
  let fixture: ComponentFixture<ManageVehiculeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageVehiculeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageVehiculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
