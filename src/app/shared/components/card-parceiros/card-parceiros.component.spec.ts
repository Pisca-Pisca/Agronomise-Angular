import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardParceirosComponent } from './card-parceiros.component';

describe('CardParceirosComponent', () => {
  let component: CardParceirosComponent;
  let fixture: ComponentFixture<CardParceirosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardParceirosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardParceirosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
