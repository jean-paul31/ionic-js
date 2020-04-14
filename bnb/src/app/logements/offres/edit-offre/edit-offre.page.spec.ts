import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditOffrePage } from './edit-offre.page';

describe('EditOffrePage', () => {
  let component: EditOffrePage;
  let fixture: ComponentFixture<EditOffrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditOffrePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditOffrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
