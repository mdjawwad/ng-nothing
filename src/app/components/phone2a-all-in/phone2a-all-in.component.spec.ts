import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Phone2aAllInComponent } from './phone2a-all-in.component';

describe('Phone2aAllInComponent', () => {
  let component: Phone2aAllInComponent;
  let fixture: ComponentFixture<Phone2aAllInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Phone2aAllInComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Phone2aAllInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
