import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TRANSITTIMEComponent } from './transit-time.component';

describe('TRANSITTIMEComponent', () => {
  let component: TRANSITTIMEComponent;
  let fixture: ComponentFixture<TRANSITTIMEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TRANSITTIMEComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TRANSITTIMEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
