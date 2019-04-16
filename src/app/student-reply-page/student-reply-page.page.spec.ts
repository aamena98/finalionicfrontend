import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentReplyPagePage } from './student-reply-page.page';

describe('StudentReplyPagePage', () => {
  let component: StudentReplyPagePage;
  let fixture: ComponentFixture<StudentReplyPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentReplyPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentReplyPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
