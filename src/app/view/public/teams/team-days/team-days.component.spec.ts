import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamDaysComponent } from './team-days.component';

describe('TeamDaysComponent', () => {
  let component: TeamDaysComponent;
  let fixture: ComponentFixture<TeamDaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamDaysComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeamDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
