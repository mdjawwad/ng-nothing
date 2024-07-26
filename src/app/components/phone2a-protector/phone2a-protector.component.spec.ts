import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Phone2aProtectorComponent } from './phone2a-protector.component';

describe('Phone2aProtectorComponent', () => {
  let component: Phone2aProtectorComponent;
  let fixture: ComponentFixture<Phone2aProtectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Phone2aProtectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Phone2aProtectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
