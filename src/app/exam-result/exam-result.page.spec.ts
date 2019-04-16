import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamResultPage } from './exam-result.page';

describe('ExamResultPage', () => {
  let component: ExamResultPage;
  let fixture: ComponentFixture<ExamResultPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamResultPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamResultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
