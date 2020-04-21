import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffresPage } from './offres.page';

describe('OffresPage', () => {
  let component: OffresPage;
  let fixture: ComponentFixture<OffresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffresPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
