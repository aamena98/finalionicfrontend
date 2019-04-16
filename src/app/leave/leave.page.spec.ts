import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavePage } from './leave.page';

describe('LeavePage', () => {
  let component: LeavePage;
  let fixture: ComponentFixture<LeavePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeavePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeavePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
