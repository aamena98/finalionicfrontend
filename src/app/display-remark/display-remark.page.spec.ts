import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayRemarkPage } from './display-remark.page';

describe('DisplayRemarkPage', () => {
  let component: DisplayRemarkPage;
  let fixture: ComponentFixture<DisplayRemarkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayRemarkPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayRemarkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
