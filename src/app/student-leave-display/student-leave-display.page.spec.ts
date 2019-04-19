import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentLeaveDisplayPage } from './student-leave-display.page';

describe('StudentLeaveDisplayPage', () => {
  let component: StudentLeaveDisplayPage;
  let fixture: ComponentFixture<StudentLeaveDisplayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentLeaveDisplayPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentLeaveDisplayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
