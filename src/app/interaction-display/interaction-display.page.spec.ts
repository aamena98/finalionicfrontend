import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractionDisplayPage } from './interaction-display.page';

describe('InteractionDisplayPage', () => {
  let component: InteractionDisplayPage;
  let fixture: ComponentFixture<InteractionDisplayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteractionDisplayPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractionDisplayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
