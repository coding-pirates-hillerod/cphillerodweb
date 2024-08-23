import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamContactComponent } from './team-contact.component';

describe('TeamContactComponent', () => {
  let component: TeamContactComponent;
  let fixture: ComponentFixture<TeamContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamContactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeamContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
