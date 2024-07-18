import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SshhhComponent } from './sshhh.component';

describe('SshhhComponent', () => {
  let component: SshhhComponent;
  let fixture: ComponentFixture<SshhhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SshhhComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SshhhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
