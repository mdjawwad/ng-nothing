import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Phone2aComponent } from './phone2a.component';

describe('Phone2aComponent', () => {
  let component: Phone2aComponent;
  let fixture: ComponentFixture<Phone2aComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Phone2aComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Phone2aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
