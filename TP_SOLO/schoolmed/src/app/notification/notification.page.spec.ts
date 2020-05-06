import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { notificationPage } from './notification.page';

describe('notificationPage', () => {
  let component: notificationPage;
  let fixture: ComponentFixture<notificationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [notificationPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(notificationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
