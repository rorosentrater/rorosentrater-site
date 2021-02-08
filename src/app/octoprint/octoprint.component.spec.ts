import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OctoprintComponent } from './octoprint.component';

describe('OctoprintComponent', () => {
  let component: OctoprintComponent;
  let fixture: ComponentFixture<OctoprintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OctoprintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OctoprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
