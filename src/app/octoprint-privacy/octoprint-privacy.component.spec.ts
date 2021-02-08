import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OctoprintPrivacyComponent } from './octoprint-privacy.component';

describe('OctoprintPrivacyComponent', () => {
  let component: OctoprintPrivacyComponent;
  let fixture: ComponentFixture<OctoprintPrivacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OctoprintPrivacyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OctoprintPrivacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
