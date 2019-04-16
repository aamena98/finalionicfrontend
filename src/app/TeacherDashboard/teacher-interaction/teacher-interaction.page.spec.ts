import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherInteractionPage } from './teacher-interaction.page';

describe('TeacherInteractionPage', () => {
  let component: TeacherInteractionPage;
  let fixture: ComponentFixture<TeacherInteractionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherInteractionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherInteractionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
