import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactCvrInfoComponent } from './contact-cvr-info.component';

describe('ContactCvrInfoComponent', () => {
  let component: ContactCvrInfoComponent;
  let fixture: ComponentFixture<ContactCvrInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactCvrInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactCvrInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
