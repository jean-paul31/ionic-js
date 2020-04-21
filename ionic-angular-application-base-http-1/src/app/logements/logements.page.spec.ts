import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogementsPage } from './logements.page';

describe('LogementsPage', () => {
  let component: LogementsPage;
  let fixture: ComponentFixture<LogementsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogementsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogementsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
