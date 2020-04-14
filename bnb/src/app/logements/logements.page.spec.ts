import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LogementsPage } from './logements.page';

describe('LogementsPage', () => {
  let component: LogementsPage;
  let fixture: ComponentFixture<LogementsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogementsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LogementsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
