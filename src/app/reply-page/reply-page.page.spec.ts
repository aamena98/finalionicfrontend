import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplyPagePage } from './reply-page.page';

describe('ReplyPagePage', () => {
  let component: ReplyPagePage;
  let fixture: ComponentFixture<ReplyPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReplyPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplyPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
