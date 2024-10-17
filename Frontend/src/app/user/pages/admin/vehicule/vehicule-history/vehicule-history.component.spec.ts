import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculeHistoryComponent } from './vehicule-history.component';

describe('VehiculeHistoryComponent', () => {
  let component: VehiculeHistoryComponent;
  let fixture: ComponentFixture<VehiculeHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiculeHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehiculeHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
