import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GigsPage } from './gigs.page';

describe('GigsPage', () => {
  let component: GigsPage;
  let fixture: ComponentFixture<GigsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GigsPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GigsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
