import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualiserPage } from './visualiser.page';

describe('VisualiserPage', () => {
  let component: VisualiserPage;
  let fixture: ComponentFixture<VisualiserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualiserPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualiserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
