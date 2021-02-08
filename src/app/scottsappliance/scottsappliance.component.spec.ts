import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScottsapplianceComponent } from './scottsappliance.component';

describe('ScottsapplianceComponent', () => {
  let component: ScottsapplianceComponent;
  let fixture: ComponentFixture<ScottsapplianceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScottsapplianceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScottsapplianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
