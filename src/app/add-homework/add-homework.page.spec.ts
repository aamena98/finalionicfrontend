import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHomeworkPage } from './add-homework.page';

describe('AddHomeworkPage', () => {
  let component: AddHomeworkPage;
  let fixture: ComponentFixture<AddHomeworkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddHomeworkPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHomeworkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
