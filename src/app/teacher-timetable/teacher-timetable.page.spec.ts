import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherTimetablePage } from './teacher-timetable.page';

describe('TeacherTimetablePage', () => {
  let component: TeacherTimetablePage;
  let fixture: ComponentFixture<TeacherTimetablePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherTimetablePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherTimetablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
