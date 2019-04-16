import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDemoPage } from './my-demo.page';

describe('MyDemoPage', () => {
  let component: MyDemoPage;
  let fixture: ComponentFixture<MyDemoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDemoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDemoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
