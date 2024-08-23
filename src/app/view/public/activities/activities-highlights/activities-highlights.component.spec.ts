import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesHighlightsComponent } from './activities-highlights.component';

describe('ActivitiesHighlightsComponent', () => {
  let component: ActivitiesHighlightsComponent;
  let fixture: ComponentFixture<ActivitiesHighlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivitiesHighlightsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActivitiesHighlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
