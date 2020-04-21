import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogementDetailPage } from './logement-detail.page';

describe('LogementDetailPage', () => {
  let component: LogementDetailPage;
  let fixture: ComponentFixture<LogementDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogementDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogementDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
