import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageMissionComponent } from './manage-mission.component';

describe('ManageMissionComponent', () => {
  let component: ManageMissionComponent;
  let fixture: ComponentFixture<ManageMissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageMissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
