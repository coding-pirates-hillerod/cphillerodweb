import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesCalendarComponent } from './activities-calendar.component';

describe('ActivitiesCalendarComponent', () => {
  let component: ActivitiesCalendarComponent;
  let fixture: ComponentFixture<ActivitiesCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivitiesCalendarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActivitiesCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
