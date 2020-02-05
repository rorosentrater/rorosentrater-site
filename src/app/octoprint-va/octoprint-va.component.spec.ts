import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OctoprintVAComponent } from './octoprint-va.component';

describe('OctoprintVAComponent', () => {
  let component: OctoprintVAComponent;
  let fixture: ComponentFixture<OctoprintVAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OctoprintVAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OctoprintVAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
