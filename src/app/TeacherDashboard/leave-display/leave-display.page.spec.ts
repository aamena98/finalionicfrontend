import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveDisplayPage } from './leave-display.page';

describe('LeaveDisplayPage', () => {
  let component: LeaveDisplayPage;
  let fixture: ComponentFixture<LeaveDisplayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaveDisplayPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveDisplayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
