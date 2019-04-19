import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRemarkPage } from './add-remark.page';

describe('AddRemarkPage', () => {
  let component: AddRemarkPage;
  let fixture: ComponentFixture<AddRemarkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRemarkPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRemarkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
