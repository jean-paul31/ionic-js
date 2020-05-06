import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { accountPage } from './account.page';

describe('accountPage', () => {
  let component: accountPage;
  let fixture: ComponentFixture<accountPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [accountPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(accountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
