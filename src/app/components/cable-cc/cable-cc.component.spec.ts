import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CableCCComponent } from './cable-cc.component';

describe('CableCCComponent', () => {
  let component: CableCCComponent;
  let fixture: ComponentFixture<CableCCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CableCCComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CableCCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
