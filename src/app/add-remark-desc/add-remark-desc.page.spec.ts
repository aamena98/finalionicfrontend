import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRemarkDescPage } from './add-remark-desc.page';

describe('AddRemarkDescPage', () => {
  let component: AddRemarkDescPage;
  let fixture: ComponentFixture<AddRemarkDescPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRemarkDescPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRemarkDescPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
