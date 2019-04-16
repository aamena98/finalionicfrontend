import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentChatDisplayPage } from './parent-chat-display.page';

describe('ParentChatDisplayPage', () => {
  let component: ParentChatDisplayPage;
  let fixture: ComponentFixture<ParentChatDisplayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentChatDisplayPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentChatDisplayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
