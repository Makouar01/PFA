import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryCongeComponent } from './history-conge.component';

describe('HistoryCongeComponent', () => {
  let component: HistoryCongeComponent;
  let fixture: ComponentFixture<HistoryCongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryCongeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryCongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
