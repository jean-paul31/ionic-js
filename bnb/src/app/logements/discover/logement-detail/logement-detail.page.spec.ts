import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LogementDetailPage } from './logement-detail.page';

describe('LogementDetailPage', () => {
  let component: LogementDetailPage;
  let fixture: ComponentFixture<LogementDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogementDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LogementDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
