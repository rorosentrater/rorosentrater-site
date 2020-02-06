import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OctoprintVaPrivacyComponent } from './octoprint-va-privacy.component';

describe('OctoprintVaPrivacyComponent', () => {
  let component: OctoprintVaPrivacyComponent;
  let fixture: ComponentFixture<OctoprintVaPrivacyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OctoprintVaPrivacyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OctoprintVaPrivacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
