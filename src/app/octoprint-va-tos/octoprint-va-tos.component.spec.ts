import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OctoprintVaTosComponent } from './octoprint-va-tos.component';

describe('OctoprintVaTosComponent', () => {
  let component: OctoprintVaTosComponent;
  let fixture: ComponentFixture<OctoprintVaTosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OctoprintVaTosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OctoprintVaTosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
