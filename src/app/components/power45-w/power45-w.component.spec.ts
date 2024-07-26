import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Power45WComponent } from './power45-w.component';

describe('Power45WComponent', () => {
  let component: Power45WComponent;
  let fixture: ComponentFixture<Power45WComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Power45WComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Power45WComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
