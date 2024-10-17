import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesRefuseComponent } from './acces-refuse.component';

describe('AccesRefuseComponent', () => {
  let component: AccesRefuseComponent;
  let fixture: ComponentFixture<AccesRefuseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccesRefuseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccesRefuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
