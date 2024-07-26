import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Phone2aCaseComponent } from './phone2a-case.component';

describe('Phone2aCaseComponent', () => {
  let component: Phone2aCaseComponent;
  let fixture: ComponentFixture<Phone2aCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Phone2aCaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Phone2aCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
