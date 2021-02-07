import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DadsSiteComponent } from './dads-site.component';

describe('DadsSiteComponent', () => {
  let component: DadsSiteComponent;
  let fixture: ComponentFixture<DadsSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadsSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DadsSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
