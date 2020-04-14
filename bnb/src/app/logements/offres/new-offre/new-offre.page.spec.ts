import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewOffrePage } from './new-offre.page';

describe('NewOffrePage', () => {
  let component: NewOffrePage;
  let fixture: ComponentFixture<NewOffrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewOffrePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewOffrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
