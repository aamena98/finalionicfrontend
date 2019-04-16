import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherDashboarfPage } from './teacher-dashboarf.page';

describe('TeacherDashboarfPage', () => {
  let component: TeacherDashboarfPage;
  let fixture: ComponentFixture<TeacherDashboarfPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherDashboarfPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherDashboarfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
