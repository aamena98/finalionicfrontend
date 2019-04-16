import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentInteractionPage } from './parent-interaction.page';

describe('ParentInteractionPage', () => {
  let component: ParentInteractionPage;
  let fixture: ComponentFixture<ParentInteractionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentInteractionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentInteractionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
