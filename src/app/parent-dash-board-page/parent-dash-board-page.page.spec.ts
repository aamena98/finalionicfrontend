import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentDashBoardPagePage } from './parent-dash-board-page.page';

describe('ParentDashBoardPagePage', () => {
  let component: ParentDashBoardPagePage;
  let fixture: ComponentFixture<ParentDashBoardPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentDashBoardPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentDashBoardPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
