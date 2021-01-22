import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BlocPagePage } from './bloc-page.page';

describe('BlocPagePage', () => {
  let component: BlocPagePage;
  let fixture: ComponentFixture<BlocPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlocPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BlocPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
