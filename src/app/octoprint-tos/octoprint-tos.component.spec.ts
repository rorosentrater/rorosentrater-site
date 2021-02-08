import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OctoprintTosComponent } from './octoprint-tos.component';

describe('OctoprintTosComponent', () => {
  let component: OctoprintTosComponent;
  let fixture: ComponentFixture<OctoprintTosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OctoprintTosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OctoprintTosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
