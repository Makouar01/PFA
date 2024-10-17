import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCongeComponent } from './manage-conge.component';

describe('ManageCongeComponent', () => {
  let component: ManageCongeComponent;
  let fixture: ComponentFixture<ManageCongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageCongeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageCongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
