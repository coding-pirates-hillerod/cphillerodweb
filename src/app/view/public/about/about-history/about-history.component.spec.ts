import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutHistoryComponent } from './about-history.component';

describe('AboutHistoryComponent', () => {
  let component: AboutHistoryComponent;
  let fixture: ComponentFixture<AboutHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutHistoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
