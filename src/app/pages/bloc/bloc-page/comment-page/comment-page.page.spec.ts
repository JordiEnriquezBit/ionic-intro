import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CommentPagePage } from './comment-page.page';

describe('CommentPagePage', () => {
  let component: CommentPagePage;
  let fixture: ComponentFixture<CommentPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CommentPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
