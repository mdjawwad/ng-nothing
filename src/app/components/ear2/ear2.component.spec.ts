import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ear2Component } from './ear2.component';

describe('Ear2Component', () => {
  let component: Ear2Component;
  let fixture: ComponentFixture<Ear2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ear2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ear2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
